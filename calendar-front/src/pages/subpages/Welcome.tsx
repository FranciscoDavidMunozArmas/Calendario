import React from 'react'
import { TITLE_WELCOME } from '../../lib/strings'

const styles = {
  containerFlex: {
    height: '100%',
    width: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as const
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    fontStyle: 'italic'
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