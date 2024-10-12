import React from "react";
import { Button, Grid, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

export const ButtonCustom = ({ data, status, onClick, loading }) => {
  const handleClick = async (event) => {
    onClick(event);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="contained"
        disabled={loading}
        sx={{
          backgroundColor: status === "cancel" ? "#FF0E0E" : "#0555AE",
          width: status === "add" ? "120px" : "120px",
          height: status === "add" ? "30px" : "40px",
          textAlign: "center",
          fontWeight: status === "add" ? 600 : 700,
          color: status === "login" ? "#FFDC53" : "white",
          borderRadius: status === "add" ? "5px" : "18px",
          "&:hover": {
            backgroundColor: status === "cancel" ? "#FF0E0E" : "#0555AE",
          },
        }}
      >
        <Grid
          container
          justifyContent="center"
          display="flex"
          alignItems="center"
        >
          {status === "add" ? (
            <>
              <Grid
                item
                xs={3}
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <AddIcon />
              </Grid>
              <Grid item xs={9} sx={{ fontSize: "13px" }}>
                {data}
              </Grid>
            </>
          ) : loading ? (
            <CircularProgress size="1.5rem" />
          ) : (
            data
          )}
        </Grid>
      </Button>
    </>
  );
};

export const ButtonAction = ({ type, onClick }) => {
  const handleClick = async (event) => {
    onClick(event);
  };

  const getIcon = (type) => {
    switch (type) {
      case "delete":
        return <DeleteIcon sx={{ height: 23 }} />;
      case "edit":
        return <EditIcon sx={{ height: 20 }} />;
      case "view":
        return <VisibilityIcon sx={{ height: 20 }} />;
      default:
        return null;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case "delete":
        return "#FF0000";
      case "edit":
        return "#28BEFF";
      case "view":
        return "#64CCC5";
      default:
        return "#000";
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: getColor(type),
          maxWidth: "25px",
          maxHeight: "25px",
          minWidth: "25px",
          minHeight: "25px",
          textAlign: "center",
          color: "white",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: getColor(type),
          },
        }}
      >
        {getIcon(type)}
      </Button>
    </>
  );
};
