import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
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
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="username"
          onChange={handelChange}
          value={form.username}
          placeholder="Enter UserName"
        />
        <input
          type="email"
          name="email"
          onChange={handelChange}
          value={form.email}
          placeholder="Enter Email"
        />
        <input
          type="text"
          name="password"
          onChange={handelChange}
          value={form.password}
          placeholder="Enter Password"
        />
        <RadioGroup name="gender" value={form.gender} onChange={handelChange}>
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
          ></FormControlLabel>
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
          ></FormControlLabel>
        </RadioGroup>
        <input
          type="number"
          name="age"
          onChange={handelChange}
          value={form.age}
          placeholder="Enter Age"
        />
        <input
          type="text"
          name="phoneNumber"
          onChange={handelChange}
          value={form.phoneNumber}
          placeholder="Enter Phone Number"
        />
        <Button type="submit">Submit</Button>
        <Button>Cancel</Button>
      </form>
    </>
  );
}

export default RegisterComponent;
