import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer';
import { PengaturanContainer } from './containers/PengaturanContainer';
import { useGetUser } from './graphql/services/User';

export default function App() {
  //const masuk = 1
  const {data, loading, error} = useGetUser();
  

  if (loading) return "Loading"
  if (error) return `Submission error! ${error.message}`

  const user = data.getUser

  return (
    <Router>
      <Routes>
        <Route path='/Pengaturan' element={<PengaturanContainer user={user}/>} />
        <Route path='/beranda' element={<HomeContainer />}/>
        {/* {masuk === 1 ? useNavigate('/Pengaturan') : useNavigate('/Beranda')} */}
      </Routes>
    </Router>
  );
}
