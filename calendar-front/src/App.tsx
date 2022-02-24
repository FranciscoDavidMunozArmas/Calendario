import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import { Login } from '@mui/icons-material';
import Main from './pages/Main';
import { Paper } from '@mui/material';

function App() {
  return (
    <Paper elevation={0}>
      <BrowserRouter>
        <Routes>
          <Route path="/constecoin" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Paper>
  );
}

export default App;
