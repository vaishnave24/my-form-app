import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link,
  Box,
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
    <AppBar position="relative">
      <Toolbar>
        {/* Menu Button */}
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        {/* Login Button */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" variant="outlined" onClick={loginNavigate}>
            Login
          </Button>

          {/* Register Button */}
          <Button color="inherit" variant="outlined" onClick={registerNavigate}>
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
