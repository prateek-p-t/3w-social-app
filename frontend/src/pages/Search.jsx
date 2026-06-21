import {
  TextField,
  Box,
  Typography
} from "@mui/material";

import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import UserCard from "../components/UserCard";

import api from "../services/api";

export default function Search() {

  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {

    const value = e.target.value;

    if (!value) {

      setUsers([]);

      return;

    }

    try {

      const res = await api.get(
        `/users/search/${value}`
      );

      setUsers(res.data);

    }
    catch (error) {

      console.log(error);

    }

  };

  return (

    <MainLayout>

      <TextField
        fullWidth
        placeholder="Search users..."
        onChange={handleSearch}
        sx={{
          mb: 4
        }}
      />

      {

        users.length === 0 ?

          (

            <Typography
              color="gray"
              textAlign="center"
            >
              Search for users
            </Typography>

          )

          :

          (

            <Box>

              {

                users.map(user => (

                  <UserCard
                    key={user._id}
                    user={user}
                  />

                ))

              }

            </Box>

          )

      }

    </MainLayout>

  );

}