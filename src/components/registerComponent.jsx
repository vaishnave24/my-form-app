import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
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

  const handelChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(form);
    } catch (error) {
      console.log(error);
      throw error;
    }
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
              fullWidth
            />

            <TextField
              label="Email"
              name="email"
              value={form.email}
              onChange={handelChange}
              fullWidth
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handelChange}
              fullWidth
            />

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
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

            <TextField
              label="Age"
              type="number"
              name="age"
              value={form.age}
              onChange={handelChange}
              fullWidth
            />

            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handelChange}
              fullWidth
            />

            <Box sx={{ display: "flex", gap: 2 }}>
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

export default RegisterComponent;
