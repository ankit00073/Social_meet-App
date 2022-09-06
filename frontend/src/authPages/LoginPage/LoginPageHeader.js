import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "black" }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: "#0a9396" }}>
        We are happy to have you back!
      </Typography>
    </>
  );
};

export default LoginPageHeader;
