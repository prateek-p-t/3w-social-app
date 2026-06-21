import {
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import {
  Home,
  Search,
  Person
} from "@mui/icons-material";

import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <Paper
      elevation={0}
      sx={{
        width: 240,
        height: "fit-content",
        p: 2,
        borderRadius: 5,
        bgcolor: "#111827",
        border: "1px solid rgba(255,255,255,.08)"
      }}
    >

      <List>

        <ListItemButton
          component={Link}
          to="/"
          sx={{
            borderRadius: 3,
            mb: 1
          }}
        >
          <ListItemIcon>
            <Home sx={{ color: "#8B5CF6" }} />
          </ListItemIcon>

          <ListItemText primary="Home" />
        </ListItemButton>


        <ListItemButton
          component={Link}
          to="/search"
          sx={{
            borderRadius: 3,
            mb: 1
          }}
        >
          <ListItemIcon>
            <Search sx={{ color: "#8B5CF6" }} />
          </ListItemIcon>

          <ListItemText primary="Search Users" />
        </ListItemButton>


        <ListItemButton
          component={Link}
          to="/profile"
          sx={{
            borderRadius: 3
          }}
        >
          <ListItemIcon>
            <Person sx={{ color: "#8B5CF6" }} />
          </ListItemIcon>

          <ListItemText primary="Profile" />
        </ListItemButton>

      </List>

    </Paper>

  );

}