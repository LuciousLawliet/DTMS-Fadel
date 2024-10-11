import React, { useContext } from "react";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import { Route, Routes, Navigate } from "react-router-dom";
import { PengaturanContainer } from "./containers/PengaturanContainer";
import Login from "./Pages/Login/Login";
//import { useGetUser } from './graphql/services/User';
import { AuthContext } from "./auth/AuthWrapper";

export default function App() {
  const { authState } = useContext(AuthContext);

  return (
    <Routes>
      {authState.token && authState.user ? (
        <>
          <Route path="/pengaturan" element={<PengaturanContainer />} />
          <Route path="/beranda" element={<HomeContainer />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
