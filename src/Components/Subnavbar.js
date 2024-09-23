import React from "react";
import {
  AppBar,
  Container,
  Typography,
  Grid,
  Box,
  Toolbar,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Subnavbar = ({ nav, user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("ini nav", nav);

  const handleHomeNavigate = () => {
    navigate("/beranda");
  };

  const handleSubnavNavigate = (route) => {
    if (route.toLowerCase() !== location.pathname.substring(1)) {
      navigate(`/${route.toLowerCase()}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        sx={{
          position: "fixed",
          backgroundColor: "#6AC40A",
          color: "#FFFFFF",
          height: 37,
          justifyContent: "center",
          marginTop: "72px",
        }}
      >
        <Toolbar>
          <Container sx={{ marginLeft: 0 }}>
            <Grid
              container
              direction="row"
              spacing={3}
              sx={{
                marginLeft: "0",
                width: "800px",
              }}
            >
              <Grid item key={"BERANDA"}>
                <Typography
                  onClick={handleHomeNavigate}
                  sx={{
                    fontWeight: 600,
                    fontSize: "13px",
                    textAlign: "start",
                    color: "white",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  BERANDA
                </Typography>
              </Grid>

              {nav.map((menu) => {
                return (
                  <Grid item key={menu.nama}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "13px",
                        textAlign: "start",
                        color:
                          menu.nama.toLowerCase() ===
                          location.pathname.substring(1)
                            ? "#0555AE"
                            : "white",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                      key={menu.nama}
                      onClick={() => handleSubnavNavigate(menu.nama)}
                    >
                      {menu.nama.toUpperCase()}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Container>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Container
              disableGutters
              sx={{
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "13px",
                  textAlign: "end",
                  color: "white",
                }}
              >
                Tanggal Valuta: {user.val_date}
              </Typography>
            </Container>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Subnavbar;
