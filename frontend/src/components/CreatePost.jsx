import {
  Paper,
  Box,
  Avatar,
  TextField,
  Button,
  Typography
} from "@mui/material";

import { useState } from "react";
import toast from "react-hot-toast";

import api from "../services/api";

export default function CreatePost({ fetchPosts }) {

  const [text, setText] = useState("");

  const handlePost = async () => {

    if (!text.trim()) {
      return toast.error("Post cannot be empty");
    }

    try {

      await api.post("/posts", {
        text,
        image: ""
      });

      toast.success("Post created");

      setText("");

      fetchPosts();

    } catch (error) {

      toast.error("Failed to create post");

    }

  };

  return (

    <Paper
      elevation={0}
      sx={{
        bgcolor: "#111827",
        borderRadius: 5,
        border: "1px solid rgba(255,255,255,.08)",
        p: 3,
        mb: 3
      }}
    >

      <Box
        sx={{
          display: "flex",
          gap: 2
        }}
      >

        <Avatar
          sx={{
            bgcolor: "#7C3AED"
          }}
        >
          U
        </Avatar>

        <Box sx={{ flex: 1 }}>

          <Typography
            fontWeight="bold"
            mb={2}
          >
            Create Post
          </Typography>

          <TextField
            multiline
            rows={3}
            fullWidth
            placeholder="What's happening?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2
            }}
          >

            <Button
              variant="contained"
              onClick={handlePost}
              sx={{
                bgcolor: "#7C3AED",
                borderRadius: 3
              }}
            >
              Post
            </Button>

          </Box>

        </Box>

      </Box>

    </Paper>

  );

}