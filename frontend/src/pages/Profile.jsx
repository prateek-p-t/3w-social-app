import {
  Paper,
  Box,
  Avatar,
  Typography,
  Divider
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";
import useAuth from "../hooks/useAuth";

export default function Profile() {

  const { user } = useAuth();

  return (

    <MainLayout>

      <Paper
        elevation={0}
        sx={{
          p: 5,
          borderRadius: 5,
          bgcolor: "#111827",
          border: "1px solid rgba(255,255,255,.08)"
        }}
      >

        <Box textAlign="center">

          <Avatar
            sx={{
              width: 120,
              height: 120,
              mx: "auto",
              mb: 3,
              bgcolor: "#7C3AED",
              fontSize: 40
            }}
          >
            {user?.username?.charAt(0)}
          </Avatar>

          <Typography variant="h4" fontWeight="bold">
            {user?.username}
          </Typography>

          <Typography color="gray" mt={1}>
            {user?.email}
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 8
            }}
          >
            <Box>
              <Typography variant="h5">0</Typography>
              <Typography color="gray">
                Followers
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5">0</Typography>
              <Typography color="gray">
                Following
              </Typography>
            </Box>

          </Box>

        </Box>

      </Paper>

    </MainLayout>

  );

}