import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Button
} from "@mui/material";

import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {

    logout();
    navigate("/login");

  };

  return (

    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "#111827",
        borderBottom: "1px solid rgba(255,255,255,.08)"
      }}
    >

      <Toolbar>

        <Typography
          variant="h5"
          fontWeight="700"
          color="#8B5CF6"
        >
          TaskPlanet
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Avatar
          sx={{
            bgcolor: "#334155",
            mr: 2
          }}
        >
          {user?.username?.charAt(0)}
        </Avatar>

        <Button
          variant="contained"
          onClick={handleLogout}
          sx={{
            bgcolor: "#7C3AED",
            borderRadius: 3,
            px: 3
          }}
        >
          Logout
        </Button>

      </Toolbar>

    </AppBar>

  );

}