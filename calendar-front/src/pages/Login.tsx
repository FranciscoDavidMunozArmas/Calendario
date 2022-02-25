import { Card, CardContent } from '@mui/material'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import { PATH } from '../lib/consts'
import { loginErrorHandler } from '../lib/errorHandler'
import { BUTTON_LOGIN, BUTTON_SIGNUP, ERROR_EMAIL_REQUIRED, ERROR_PASSWORD_REQUIRED, HINT_EMAIL, HINT_PASSWORD } from '../lib/strings'
import { styles } from '../lib/style'
import { toastManager } from '../lib/toastManager'
import { setUpToken } from '../lib/tokenInterceptor'
import { login } from '../services/user.service'


function Login() {

  const [user, setuser] = useState<any>();
  const [loading, setloading] = useState<boolean>(false);

  const navigate = useNavigate();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  }

  const onSubmit = async (form: FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    setloading(true);
    try {
      if (!user.email) {
        toastManager.error(ERROR_EMAIL_REQUIRED);
        setloading(false);
        return;
      }
      if (!user.password) {
        toastManager.error(ERROR_PASSWORD_REQUIRED);
        setloading(false);
        return;
      }
      const token = await login({ email: user.email, password: user.password });
      setUpToken(token.data.token);
      navigate(`/${PATH.root}`);
    } catch (error: any) {
      loginErrorHandler(error.response.status);
    }
    setloading(false);
  }

  return (
    <>
      <div style={styles.containerFlex}>
        <Loading load={loading} />
        <Card sx={styles.card} elevation={4}>
          <CardContent sx={{ position: 'relative' }}>
            <h5 style={styles.title}>{BUTTON_LOGIN}</h5>
            <form style={styles.formStyle} onSubmit={onSubmit}>
              <div style={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder={HINT_EMAIL}
                  style={styles.formControl}
                  onChange={onChange} />
              </div>
              <div style={styles.formGroup}>
                <input
                  type="password"
                  name="password"
                  placeholder={HINT_PASSWORD}
                  style={styles.formControl}
                  onChange={onChange} />
              </div>

              <button type='submit' style={styles.button}>{BUTTON_LOGIN}</button>
            </form>
            <a href={`/${PATH.signup}`} style={{ ...styles.link, position: 'absolute' }}>{BUTTON_SIGNUP}</a>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Login