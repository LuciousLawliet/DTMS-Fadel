import { useLazyQuery } from "@apollo/client";
import React, { createContext, useEffect, useState, useRef } from "react";
import { GET_USERS } from "../graphql/services/User.js";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const initialRender = useRef(true);

  const [authState, setAuthState] = useState({
    token: sessionStorage.getItem("token"),
    nik: sessionStorage.getItem("nik"),
    user: null,
  });

  const [getUserSession] = useLazyQuery(GET_USERS, {
    onCompleted: (data) => {
      navigate('/pengaturan');
      setAuthState((prevState) => ({
        ...prevState,
        //user: data.getUser,
        user: data.getUser.find((u) => u.nik === authState.nik),
      }));
      //console.log("Firs, ", data.getUser)
    },
  });

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      const token = sessionStorage.getItem("token");
      if (token && !authState.user) {
        navigate('/pengaturan')
        getUserSession();
      }
    }

    if (sessionStorage.getItem("token")) {
      const decodedToken = jwtDecode(sessionStorage.getItem("token"));

      if (decodedToken.exp * 1000 < Date.now()) {
        logout();
      } else {
        
      }
    }
  }, [getUserSession, navigate, authState.user]);

  const login = (token, nik) => {
    setAuthState({ token, user: null });
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("nik", nik);
    getUserSession();
  };

  const logout = () => {
    setAuthState({
      token: null,
      user: null,
      nik: null,
    });
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("nik");
    window.location.reload();
  };

  

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
