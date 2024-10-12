import React, { useContext } from "react";
import "./App.css";
import HomeContainer from "./containers/HomeContainer.js";
import { Route, Routes, Navigate } from "react-router-dom";
import { PengaturanContainer } from "./containers/PengaturanContainer.js";
import Login from "./pages/Login/Login.js";
import { AuthContext } from "./auth/AuthWrapper.js";

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
