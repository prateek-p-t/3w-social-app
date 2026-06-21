import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C3AED",
    },
    secondary: {
      main: "#06B6D4",
    },
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
  },

  shape: {
    borderRadius: 20,
  },
});

export default theme;