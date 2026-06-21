import {
  Paper,
  Typography,
  Stack
} from "@mui/material";

export default function RightSidebar() {

  return (

    <Paper
      elevation={0}
      sx={{
        width: 260,
        p: 3,
        height: "fit-content",
        borderRadius: 5,
        bgcolor: "#111827",
        border: "1px solid rgba(255,255,255,.08)"
      }}
    >

      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
      >
        Trending Topics
      </Typography>

      <Stack spacing={2}>

        <Typography>#React</Typography>

        <Typography>#NodeJS</Typography>

        <Typography>#MongoDB</Typography>

        <Typography>#JavaScript</Typography>

        <Typography>#MERN</Typography>

      </Stack>

    </Paper>

  );

}