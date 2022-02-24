import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import { Login } from '@mui/icons-material';
import Main from './pages/Main';
import { Paper } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { PATH } from './lib/consts';

function App() {
  return (
    <Paper elevation={0}>
      <BrowserRouter>
        <Routes>
          <Route path="/*">
            <Route path={`${PATH.root}/*`} element={<Main />} />
            <Route path={`${PATH.login}`} element={<Login />} />
            <Route path={`${PATH.signup}`} element={<Signup />} />
            <Route path="*" element={<Navigate to={`${PATH.login}`} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Paper>
  );
}

export default App;
