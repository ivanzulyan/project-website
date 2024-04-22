import React from 'react'
import Dashboard from '../Dashboard'
import { Route, Routes } from "react-router-dom";
import Analytics from '../Analytics';
import Homepage from './Homepage/Homepage';
import Perhitungan from '../Perhitungan';
import Dataset from '../Dataset';
import Prediksi from '../Prediksi';
import Login from './Login';

function PageRoutes() {



  return (
    <Routes>
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/analytic" element={<Analytics />} />
    <Route path="/dataset" element={<Dataset />} />
    <Route path="/perhitungan" element={<Perhitungan />} />
    <Route path="/prediksi" element={<Prediksi />} />
     </Routes>
  )
}

export default PageRoutes
