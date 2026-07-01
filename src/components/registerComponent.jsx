import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { registerUser } from "../api/authService";

function RegisterComponent() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    age: "",
    gender: "",
    phoneNumber: "",
  });

  const [error, setError] = useState(null);

  // change event
  const handelChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  //register user
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const result = await registerUser(form);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  };

  //Validation controlled with state
  const validateForm = () => {
    let errorShow = {};
    if (!form.username) {
      errorShow.username = "User name is required";
    }
    if (!form.email) {
      errorShow.email = "Email name is required";
    }
    if (!form.age) {
      errorShow.age = "Age name is required";
    }
    if (!form.gender) {
      errorShow.gender = "Gender name is required";
    }
    if (!form.phoneNumber) {
      errorShow.phoneNumber = "Phone Number is required";
    } else if (form.phoneNumber.length !== 10) {
      errorShow.phoneNumber = "Phone Number must be 10 digit";
    }
    setError(errorShow);
    return Object.keys(errorShow).length === 0;
  };

  //clear form 
  const onCancel = () => {
    setForm({
      username: "",
      age: "",
      phoneNumber: "",
      gender: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#d3e3fd",
          p: 2,
        }}
      >
        <Paper
          sx={{
            width: {
              xs: "100%",
              sm: "400px",
              md: "500px",
            },
            minHeight: {
              xs: "auto",
              sm: "450px",
              md: "500px",
            },
            p: {
              xs: 2,
              sm: 3,
              md: 4,
            },
            borderRadius: 4,
          }}
        >
          <Box
            component="form"
            onSubmit={handelSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h4">Register User!</Typography>
            <TextField
              label="Username"
              name="username"
              value={form.username}
              onChange={handelChange}
              error={!!error?.username}
              helperText={error?.username}
              fullWidth
            />

            <TextField
              label="Email"
              name="email"
              value={form.email}
              onChange={handelChange}
              error={!!error?.email}
              helperText={error?.email}
              fullWidth
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handelChange}
              error={!!error?.password}
              helperText={error?.password}
              fullWidth
            />
            <FormControl error={!!error?.gender}>
              <FormLabel sx={{ display: "flex" }}>Gender</FormLabel>
              <RadioGroup
                name="gender"
                value={form.gender}
                onChange={handelChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
              <FormHelperText>{error?.gender}</FormHelperText>
            </FormControl>

            <TextField
              label="Age"
              type="number"
              name="age"
              value={form.age}
              onChange={handelChange}
              error={!!error?.age}
              helperText={error?.age}
              fullWidth
            />

            <TextField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={form.phoneNumber}
              onChange={handelChange}
              error={!!error?.phoneNumber}
              helperText={error?.phoneNumber}
              fullWidth
            />

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>

              <Button
                variant="outlined"
                type="button"
                fullWidth
                onClick={onCancel}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default RegisterComponent;
