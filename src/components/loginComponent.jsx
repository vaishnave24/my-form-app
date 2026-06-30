import { Box, Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { loginUser } from "../api/authService";

function LoginPageComponent() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    console.log("called", form);
    e.preventDefault();
    try {
      const response = await loginUser(form);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#d3e3fd",
          padding: 2,
        }}
      >
        <Paper
          sx={{
            width: {
              xs: "100%",
              md: "500px",
              sm: "80%",
            },
            height: {
              xs: "auto",
              sm: "400",
              md: "500px",
            },
            padding: 4,
            borderRadius: 4,
          }}
        >
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Enter user name"
              value={form.email}
              onChange={handelChange}
            />
            <br />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handelChange}
              placeholder="Enter password"
            />
            <br />
            <div>
              <Button type="submit">Submit</Button>
              <Button>Cancel</Button>
            </div>
          </form>
        </Paper>
      </Box>
    </>
  );
}

export default LoginPageComponent;
