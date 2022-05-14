import type { NextPage } from "next";
import { useState } from "react";
import Router from "next/router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { login } from "../../apis/authentication";
import withAuthenticated from "../../hoc/withAuthenticated";

const Login: NextPage = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeUserName = (newValue: string) => {
    setUserName(newValue);
  };

  const handleChangePassword = (newValue: string) => {
    setPassword(newValue);
  };

  const handleClickLogin = () => {
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      localStorage.setItem("accessToken", res.data.access);
      Router.push("/");
    });
  };
  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Typography variant="h3">Login</Typography>
      <Box
        sx={{
          width: "50%",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <TextField
          label="아이디"
          color="primary"
          value={username}
          onChange={(e) => handleChangeUserName(e.target.value)}
        />
        <TextField
          type="password"
          label="비밀번호"
          color="primary"
          value={password}
          onChange={(e) => handleChangePassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleClickLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default withAuthenticated(Login);
