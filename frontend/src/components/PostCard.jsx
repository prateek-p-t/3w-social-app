import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Box,
  IconButton
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";

import api from "../services/api";

export default function PostCard({ post, fetchPosts }) {

  const likePost = async () => {

    try {

      await api.put(`/posts/${post._id}/like`);

      fetchPosts();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <Card
      elevation={0}
      sx={{
        bgcolor: "#111827",
        borderRadius: 5,
        border: "1px solid rgba(255,255,255,.08)",
        mb: 3,
        overflow: "hidden"
      }}
    >

      <CardContent>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center"
          }}
        >

          <Avatar
            sx={{
              bgcolor: "#7C3AED"
            }}
          >
            {post.username?.charAt(0)}
          </Avatar>

          <Box>

            <Typography
              fontWeight="bold"
            >
              {post.username}
            </Typography>

            <Typography
              variant="body2"
              color="gray"
            >
              {new Date(post.createdAt).toLocaleString()}
            </Typography>

          </Box>

        </Box>

        <Typography
          sx={{
            mt: 3,
            mb: 2,
            lineHeight: 1.8
          }}
        >
          {post.text}
        </Typography>

      </CardContent>

      {
        post.image &&
        <CardMedia
          component="img"
          image={`http://localhost:5000${post.image}`}
          alt="Post"
          sx={{
            maxHeight: 500,
            objectFit: "cover"
          }}
        />
      }

      <Box
        sx={{
          px: 2,
          py: 1,
          display: "flex",
          gap: 4
        }}
      >

        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >

          <IconButton
            onClick={likePost}
          >
            <FavoriteIcon
              sx={{
                color: "#EF4444"
              }}
            />
          </IconButton>

          <Typography>
            {post.likes?.length || 0}
          </Typography>

        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >

          <IconButton>

           <ChatIcon
                sx={{
             color: "#60A5FA"
             }}
            />

          </IconButton>

          <Typography>
            {post.comments?.length || 0}
          </Typography>

        </Box>

      </Box>

    </Card>

  );

}