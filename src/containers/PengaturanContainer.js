import React, { useContext, useEffect, useState } from "react";
import Pengaturan from "../Pages/Pengaturan";
import { useGetMenu } from "../graphql/services/Menu";
import { AuthContext } from "../auth/AuthWrapper";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const PengaturanContainer = () => {
  const { data, loading, error } = useGetMenu();
  const { authState } = useContext(AuthContext);
  //const navigate = useNavigate();

  // useEffect(() => {
  //   if (!authState.token || !authState.user) {
  //     navigate("/login");
  //   }
  // }, [authState, navigate]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <p>Error fetching menu data. Please try again later.</p>;
  }

  const menuItem = data.getMenuList;
  //const getUser = authState.user.find((u) => u.nik === authState.nik)
  console.log("first, ", authState.nik)
  return (
    <Pengaturan
      menuItem={menuItem}
      user={authState.user}
    />
  );
};
