import {
  Box,
  Paper,
  Typography,
  TextField,
  Button
} from "@mui/material";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";
import toast from "react-hot-toast";

export default function Signup() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await api.post("/auth/signup", formData);

      toast.success("Account created successfully");

      navigate("/login");

    } catch (error) {

      console.log(error.response?.data);

      toast.error(
        error.response?.data?.message || "Signup failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right,#0F172A,#1E1B4B)"
      }}
    >

      <Paper
        elevation={10}
        sx={{
          width: 450,
          p: 5,
          borderRadius: 5
        }}
      >

        <Typography
          variant="h4"
          sx={{
            mb: 4,
            textAlign: "center"
          }}
        >
          Create Account 🚀
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
          >
            {loading ? "Loading..." : "Sign Up"}
          </Button>

        </form>

        <Typography
          sx={{
            mt: 3,
            textAlign: "center"
          }}
        >

          Already have an account?

          <Link
            to="/login"
            style={{
              marginLeft: 5,
              color: "#7C3AED"
            }}
          >
            Login
          </Link>

        </Typography>

      </Paper>

    </Box>

  );

}