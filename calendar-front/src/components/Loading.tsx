import React from 'react'
import { Paper, Slide } from '@mui/material'
import { BORDER_RADIUS, palette } from '../lib/style'

const styles = {
    loadingContainer: {
        position: 'fixed' as const,
        bottom: 50,
        left: 50,
        zIndex: 99999,
        padding: 20,
        borderRadious: BORDER_RADIUS,
    },
    circle: {
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        borderTop: `2px solid ${palette.primary}`,
        borderLeft: `2px solid ${palette.primary}`,
    }
}

interface Props {
    load: boolean
}

function Loading(props: Props) {

    return (
        <Slide direction="right" in={props.load} mountOnEnter unmountOnExit>
            <Paper style={styles.loadingContainer} elevation={2}>
                <div className="spin" style={styles.circle}></div>
            </Paper>
        </Slide>

    )
}

export default Loading