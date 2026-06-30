import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const loginNavigate = () => {
    navigate("/login");
  };
  const registerNavigate = () => {
    navigate("/register");
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Menu Button */}
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        {/* Login Button */}
        <Button color="inherit" variant="outlined" onClick={loginNavigate}>
          Login
        </Button>

        {/* Register Button */}
        <Button color="inherit" variant="outlined" onClick={registerNavigate}>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
