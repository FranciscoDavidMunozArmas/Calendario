import { Card, CardContent } from '@mui/material'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../lib/consts'
import { BUTTON_LOGIN, BUTTON_SIGNUP, ERROR_EMAIL_REQUIRED, ERROR_PASSWORD_REQUIRED, HINT_EMAIL, HINT_PASSWORD } from '../lib/strings'
import { styles } from '../lib/style'
import { toastManager } from '../lib/toastManager'
import { setUpToken } from '../lib/tokenInterceptor'
import { login } from '../services/user.service'


function Login() {

  const [user, setuser] = useState<any>();

  const navigate = useNavigate();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  }

  const onSubmit = async (form: FormEvent<HTMLFormElement>) => {
    form.preventDefault();

    try {
      if (!user.email) {
        toastManager.error(ERROR_EMAIL_REQUIRED);
        return;
      }
      if (!user.password) {
        toastManager.error(ERROR_PASSWORD_REQUIRED);
        return;
      }
      const token = await login({ email: user.email, password: user.password });
      // setUpToken(token);
      // navigate(`/${PATH.root}`);
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <>
      <div style={styles.containerFlex}>
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