import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { loginUser } from "../api/authService";

function LoginPageComponent() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handelSubmit = async (e) => {
    console.log("called", form);
    e.preventDefault();
    if (onValidateForm()) {
      try {
        const response = await loginUser(form);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  //Validation controlled
  const onValidateForm = () => {
    let errorShow = {};
    if (!form.email) {
      errorShow.email = "Email is required";
    }
    if (!form.password) {
      errorShow.password = "Password is required";
    } else if (form.password.length < 7) {
      errorShow.password = "Password must be at least 7 characters long";
    }
    setError(errorShow);
    return Object.keys(errorShow).length === 0;
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#d3e3fd",
          p: 2,
        }}
      >
        <Paper
          sx={{
            width: "100%",
            maxWidth: "500px",
            minHeight: "auto",
            p: {
              xs: 2,
              sm: 3,
              md: 4,
            },
            borderRadius: 4,
          }}
        >
          <Typography variant="h5" mb={3} textAlign="center">
            Login
          </Typography>

          <Box
            component="form"
            onSubmit={handelSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              label="Enter Email"
              name="email"
              value={form.email}
              onChange={handelChange}
              error={!!error?.email}
              helperText={error?.email}
              fullWidth
            />

            <TextField
              label="Enter Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handelChange}
              error={!!error?.password}
              helperText={error?.password}
              fullWidth
            />

            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "100%",
              }}
            >
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>

              <Button variant="outlined" type="button" fullWidth>
                Cancel
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default LoginPageComponent;
