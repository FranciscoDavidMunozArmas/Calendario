import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from './subpages/Calendar';
import Welcome from './subpages/Welcome';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Welcome />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main