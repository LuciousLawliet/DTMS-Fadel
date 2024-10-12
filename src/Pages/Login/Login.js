import React from "react";
import LoginForm from "../../components/LoginForm.js";
import {
  Typography,
  createTheme,
  ThemeProvider,
  Paper,
  Box,
  Grid,
} from "@mui/material";
import styles from "./Login.module.css";
import Logo from "../../assets/images/logo.png";

const Login = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Open sans, sans-serif",
    },
  });

  const Spacer = ({ height }) => {
    return <div style={{ height: height }} />;
  };

  return (
    <div>
      <Box className={styles.box}>
        <Paper
          elevation={13}
          sx={{
            width: "981px",
            height: "480px",
            alignItems: "center",
          }}
        >
          <Grid container direction="row" justifyContent="center">
            <Grid
              item
              // xs={4}
              xs={6}
              sx={{
                backgroundColor: "#0555AE",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "480px",
                // height: '537px'
              }}
            >
              <img src={Logo} alt="DTMS 2.0" className={styles.img} />
            </Grid>
            <Grid
              item
              // xs={8}
              xs={6}
              sx={{
                padding: "81px 86px 176px 60px",
                height: "480px",
                backgroundColor: "#F6F1F1",
                // width: '711px'
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  SILAHKAN MASUK
                </Typography>
              </ThemeProvider>
              <Spacer height="30px" />
              <LoginForm />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default Login;
