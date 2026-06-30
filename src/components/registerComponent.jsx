import { Button } from "@mui/material";

function RegisterComponent() {
  const registerUser = () => {};
  return (
    <>
      <form onSubmit={registerUser}>
        <input type="text" placeholder="Enter UserName" />
        <input type="text" placeholder="Enter Email" />
        <input type="text" placeholder="Enter Password" />
        <input type="radio"></input>
        <input type="radio"></input>
        <input type="number" placeholder="Enter Age" />
        <input type="text" placeholder="Enter Phone Number" />
        <Button>Submit</Button>
        <Button>Cancel</Button>
      </form>
    </>
  );
}

export default RegisterComponent;
