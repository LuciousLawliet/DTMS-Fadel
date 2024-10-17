import React, { useContext } from "react";
import Pengaturan from "../pages/Pengaturan.js";
import { useGetMenu } from "../graphql/services/Menu.js";
import { AuthContext } from "../auth/AuthWrapper.js";
import { CircularProgress } from "@mui/material";

export const PengaturanContainer = () => {
  const { data, loading, error } = useGetMenu();
  const { authState } = useContext(AuthContext);

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

  return <Pengaturan menuItem={menuItem} user={authState.user} />;
};
