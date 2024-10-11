import React, { useContext, useState } from "react";
import { ButtonCustom } from "./Button";
import { TextField, Grid, Typography, Alert } from "@mui/material";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../auth/AuthWrapper";
import { LOGIN } from "../graphql/services/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ NIK: "", password: "" });
  //const [loginUser, { loading }] = useMutation(LOGIN);
  const { login } = useContext(AuthContext);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const [loginUser, { loading }] = useMutation(LOGIN, {
    onError: ({ graphQLErrors }) => {
      setErrors(graphQLErrors);
    },
    onCompleted: (data) => {
      login(data.loginUser.token, data.loginUser.nik);
      window.location.reload();
      navigate("/pengaturan");
    },
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    loginUser({
      variables: {
        nik: formData.NIK,
        password: formData.password,
      },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        spacing="15"
      >
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
            }}
          >
            NIK
          </Typography>
          <TextField
            fullWidth
            name="NIK"
            variant="outlined"
            size="small"
            value={formData.NIK}
            onChange={handleFieldChange}
            InputProps={{
              sx: {
                backgroundColor: "#B8C0CA",
                borderRadius: "8px",
                borderColor: "#0555AE",
                "&:hover": {
                  borderColor: "#4D83C0",
                  border: "1",
                  backgroundColor: "#A7AFB9",
                },
              },
            }}
          />
        </Grid>

        <Grid item container direction="column" spacing="8">
          <Grid item>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
              }}
            >
              KATA SANDI
            </Typography>
            <TextField
              name="password"
              variant="outlined"
              size="small"
              type="password"
              value={formData.password}
              onChange={handleFieldChange}
              onKeyDown={handleKeyDown}
              fullWidth
              InputProps={{
                sx: {
                  backgroundColor: "#B8C0CA",
                  borderRadius: "8px",
                  borderColor: "#0555AE",
                  "&:hover": {
                    borderColor: "#4D83C0",
                    border: "1",
                    backgroundColor: "#A7AFB9",
                  },
                },
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" align="right">
              Lupa kata sandi?
            </Typography>
          </Grid>
        </Grid>

        {errors.map(function (error) {
          return <Alert severity="error">{error.message}</Alert>;
        })}

        <Grid item textAlign="center">
          <ButtonCustom
            data={"MASUK"}
            status={"login"}
            onClick={handleSubmit}
            loading={loading}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
