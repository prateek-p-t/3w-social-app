import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Button
} from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";

import toast from "react-hot-toast";
import api from "../services/api";

export default function UserCard({ user }) {

  const handleFollow = async () => {

    try {

      await api.put(`/users/${user._id}/follow`);

      toast.success("User followed");

    }
    catch {

      toast.error("Unable to follow");

    }

  };

  return (

    <Card
      elevation={0}
      sx={{
        mb: 2,
        borderRadius: 5,
        bgcolor: "#111827",
        border: "1px solid rgba(255,255,255,.08)",
        transition: ".25s",

        "&:hover": {
          transform: "translateY(-2px)"
        }
      }}
    >

      <CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center"
            }}
          >

            <Avatar
              sx={{
                width: 55,
                height: 55,
                bgcolor: "#7C3AED",
                fontWeight: "bold"
              }}
            >
              {user.username?.charAt(0)}
            </Avatar>

            <Box>

              <Typography
                fontWeight="bold"
                fontSize={18}
              >
                {user.username}
              </Typography>

              <Typography
                color="gray"
                fontSize={14}
              >
                {user.email}
              </Typography>

            </Box>

          </Box>

          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            onClick={handleFollow}
            sx={{
              bgcolor: "#7C3AED",
              borderRadius: 3,
              px: 3,

              "&:hover": {
                bgcolor: "#8B5CF6"
              }
            }}
          >
            Follow
          </Button>

        </Box>

      </CardContent>

    </Card>

  );

}