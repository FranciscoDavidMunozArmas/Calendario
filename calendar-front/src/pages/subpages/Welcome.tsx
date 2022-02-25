import React from 'react'
import { TITLE_WELCOME } from '../../lib/strings'
import { palette } from '../../lib/style'

const styles = {
  containerFlex: {
    height: '90vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as const
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    fontStyle: 'italic',
    color: palette.primary
  }
}

function Welcome() {
  return (
    <div style={styles.containerFlex}>
      <h5 style={styles.title}>{TITLE_WELCOME}</h5>
    </div>
  )
}

export default Welcome