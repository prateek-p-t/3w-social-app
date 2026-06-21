import { Box, Typography } from "@mui/material";

export default function NotFound() {

  return (

    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <Typography variant="h3">

        404 Page Not Found

      </Typography>

    </Box>

  );

}