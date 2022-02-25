import { Card, CardContent } from '@mui/material'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import { PATH } from '../lib/consts'
import { signupErrorHandler } from '../lib/errorHandler'
import { BUTTON_LOGIN, BUTTON_SIGNUP, ERROR_EMAIL_REQUIRED, ERROR_PASSWORD_CONFIRM, ERROR_PASSWORD_LENGTH, ERROR_PASSWORD_REQUIRED, HINT_EMAIL, HINT_PASSWORD, HINT_PASSWORD_CONFIRM } from '../lib/strings'
import { styles } from '../lib/style'
import { toastManager } from '../lib/toastManager'
import { PASSWORD_LENGTH } from '../lib/utils'
import { createUser } from '../services/user.service'

function Signup() {

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
      if (user.password.length < PASSWORD_LENGTH) {
        toastManager.error(ERROR_PASSWORD_LENGTH);
        setloading(false);
        return;
      }
      if (user.confirm !== user.password) {
        toastManager.error(ERROR_PASSWORD_CONFIRM);
        setloading(false);
        return;
      }
      await createUser({ email: user.email, password: user.password });
      navigate(`/${PATH.login}`);
      toastManager.success("Cuenta creada con éxito");
    } catch (error: any) {
      signupErrorHandler(error.response.status);
    }
    setloading(false);
  }

  return (
    <>
      <Loading load={loading} />
      <div style={styles.containerFlex}>
        <Card sx={styles.card} elevation={4}>
          <CardContent sx={{ position: 'relative' }}>
            <h5 style={styles.title}>{BUTTON_SIGNUP}</h5>
            <form style={styles.formStyle} onSubmit={onSubmit}>
              <div style={styles.formGroup}>
                <input type="email" name="email" placeholder={HINT_EMAIL} onChange={onChange} style={styles.formControl} />
              </div>
              <div style={styles.formGroup}>
                <input type="password" name="password" placeholder={HINT_PASSWORD} onChange={onChange} style={styles.formControl} />
              </div>
              <div style={styles.formGroup}>
                <input type="password" name="confirm" placeholder={HINT_PASSWORD_CONFIRM} onChange={onChange} style={styles.formControl} />
              </div>
              <button type='submit' style={styles.button}>{BUTTON_SIGNUP}</button>
            </form>
            <a href={`/${PATH.login}`} style={{ ...styles.link, position: 'absolute' }}>{BUTTON_LOGIN}</a>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Signup