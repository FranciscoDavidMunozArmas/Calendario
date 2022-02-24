export const palette = {
    primary: '#338CFF',
}

export const BORDER_RADIUS = '0.45rem';

export const styles = {
    containerFlex: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        with: '100%'
    },
    formStyle: {
        width: '100%',
        maxWidth: '400px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formGroup: {
        width: '100%',
        margin: '0.75rem 0',
    },
    formControl: {
        width: '100%',
        padding: '1rem 0.5rem',
        border: '1px solid #ccc',
        borderRadius: BORDER_RADIUS,
    },
    card: {
        width: '100%',
        margin: '1rem',
        padding: '0 0.5rem',
        maxWidth: '500px',
        height: 'auto',
        maxHeight: '500px',
        borderRadius:`${BORDER_RADIUS}`,
    },
    button: {
        padding: '0.5rem 1rem',
        background: palette.primary,
        color: '#fff',
        border: `1px solid ${palette.primary}`,
        borderRadius: BORDER_RADIUS,
        marginHorizontal: 'auto',
        cursor: 'pointer',
        fontSize: '1rem',
    },
    title: {
        textAlign: 'center' as const,
        textTransform: 'uppercase' as const,
        color: palette.primary,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    link: {
        marginBottom: '0.5rem',
        color: palette.primary,
        textDecoration: 'none',
        fontSize: '0.8rem',
    }
}