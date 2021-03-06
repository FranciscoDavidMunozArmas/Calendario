import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { palette } from '../lib/style';
import { Home, Logout } from '@mui/icons-material';
import { PATH } from '../lib/consts';
import { useNavigate } from 'react-router-dom';
import { toastManager } from '../lib/toastManager';
import { ERROR_MESSAGE } from '../lib/strings';
// import { logout } from '../services/user.service';
import { removeToken } from '../lib/tokenInterceptor';

function Navbar() {

    const navigate = useNavigate();

    const onClick = (path: string) => {
        navigate(path);
    }

    const onLogout = async () => {
        try {
            // await logout();
            removeToken();
            navigate(`/${PATH.login}`);
        } catch (error: any) {
            toastManager.error(ERROR_MESSAGE);
        }
    }

    return (
        <Box sx={{flexGrow: 1, backgroundColor: palette.primary }}>
            <AppBar position="static" style={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => onClick(`/${PATH.root}/${PATH.home}`)}
                    >
                        <Home />
                    </IconButton>
                    <Button color="inherit" onClick={() => onClick(`/${PATH.root}/${PATH.calendar}`)}>Administrar Calendario</Button>
                </Toolbar>
                <div style={{
                    position: "absolute",
                    right: "0",
                    height: "100%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={onLogout}
                    >
                        <Logout />
                    </IconButton>
                </div>
            </AppBar>
        </Box>
    )
}

export default Navbar