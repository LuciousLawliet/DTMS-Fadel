import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer';
import { ThemeProvider } from '@mui/material';
import { PengaturanContainer } from './containers/PengaturanContainer';

export default function App() {
  const masuk = 1

  return (
    <Router>
      <Routes>
        {masuk === 1 ?(
          <>
            <Route path='/' element={<PengaturanContainer />} />
          </>
        ) : (
          <>
            <Route path='/beranda' element={<HomeContainer />}/>
          </>
        )}
      </Routes>
    </Router>
  );
}
