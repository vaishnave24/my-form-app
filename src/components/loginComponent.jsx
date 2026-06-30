import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

function LoginPageComponent() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = () => {
    console.log("called");
  };

  const handelChange = (e) => {
    console.log("e", e);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Box>
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
      </Box>
    </>
  );
}

export default LoginPageComponent;
