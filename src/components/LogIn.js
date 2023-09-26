import React from "react";
import { UseState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
const LogIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogIn = async () => {
    const body = {
      email,
      password,
    };
    console.log("body => ", body);
    try {
      const response = await fetch("http://localhost:8080/create-user", {
        // const response = await fetch("http://localhost:8080/signUp", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });

      response.json().then((res) => {
        console.log(res.message, res.data);
        alert(res.message);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="register">
      <Typography
        color="#262626"
        fontWeight="bold"
        gutterBottom
        variant="h4"
        component="div"
      >
        Login
      </Typography>
      <Box>
        <Stack spacing={2}>
          <TextField
            label="Enter Your Email*"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Enter Your Password*"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <Button onClick={handleLogIn} variant="contained" size="large">
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default LogIn;
