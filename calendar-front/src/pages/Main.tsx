import React from 'react'
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { PATH } from '../lib/consts';
import Calendar from './subpages/Calendar';
import Welcome from './subpages/Welcome';

function Main() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path={`${PATH.home}`} element={<Welcome />} />
          <Route path={`${PATH.calendar}`} element={<Calendar />} />
          <Route path="/*" element={<Navigate to={`${PATH.home}`} />} />
        </Routes>
      </div>
    </>
  )
}

export default Main