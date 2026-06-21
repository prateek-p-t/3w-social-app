import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

export default function MainLayout({ children }) {
  return (
    <Box>

      <Navbar />

      <Box
        sx={{
          display: "flex",
          mt: 10,
          px: 3
        }}
      >
        <Sidebar />

        <Box
          sx={{
            flex: 1,
            maxWidth: 700,
            mx: "auto"
          }}
        >
          {children}
        </Box>

        <RightSidebar />

      </Box>

    </Box>
  );
}