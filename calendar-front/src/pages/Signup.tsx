import { Card, CardContent } from '@mui/material'
import React from 'react'
import { PATH } from '../lib/consts'
import { BUTTON_LOGIN, BUTTON_SIGNUP, HINT_EMAIL, HINT_PASSWORD, HINT_PASSWORD_CONFIRM } from '../lib/strings'
import { styles } from '../lib/style'

function Signup() {
  return (
    <>
      <div style={styles.containerFlex}>
        <Card sx={styles.card} elevation={4}>
          <CardContent sx={{ position: 'relative' }}>
            <h5 style={styles.title}>{ BUTTON_SIGNUP }</h5>
            <form style={styles.formStyle} >
              <div style={styles.formGroup}>
                <input type="email" name="email" placeholder={HINT_EMAIL} style={styles.formControl} />
              </div>
              <div style={styles.formGroup}>
                <input type="password" name="password" placeholder={HINT_PASSWORD} style={styles.formControl} />
              </div>
              <div style={styles.formGroup}>
                <input type="password" name="confirm" placeholder={HINT_PASSWORD_CONFIRM} style={styles.formControl} />
              </div>
              <button type='submit' style={styles.button}>{BUTTON_LOGIN}</button>
            </form>
            <a href={`/${PATH.login}`} style={{ ...styles.link, position: 'absolute' }}>{BUTTON_LOGIN}</a>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Signup