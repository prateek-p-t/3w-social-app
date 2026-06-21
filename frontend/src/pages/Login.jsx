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
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

export default function Login() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
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

      const res = await api.post("/auth/login", formData);

      login(res.data.user, res.data.token);

      toast.success("Login successful");

      navigate("/");

    }
    catch (error) {

      toast.error(
        error.response?.data?.message || "Login failed"
      );

    }
    finally {

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
          width: 400,
          padding: 5,
          borderRadius: 5
        }}
      >

        <Typography
          variant="h4"
          sx={{
            marginBottom: 4,
            textAlign: "center"
          }}
        >
          Welcome Back 👋
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              marginBottom: 3
            }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            sx={{
              marginBottom: 3
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
          >
            {
              loading
                ? "Loading..."
                : "Login"
            }
          </Button>

        </form>

        <Typography
          sx={{
            marginTop: 3,
            textAlign: "center"
          }}
        >

          Don't have an account?

          <Link
            to="/signup"
            style={{
              color: "#7C3AED",
              marginLeft: 5
            }}
          >
            Sign Up
          </Link>

        </Typography>

      </Paper>

    </Box>

  );

}