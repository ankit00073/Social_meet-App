import React from "react";
// import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Iframe from "react-iframe";
const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const WelcomeMessage = () => {
  return (
    <Wrapper>
      {/* <Typography variant="h6" sx={{ color: "white" }}>
        To start chatting - choose conversation
      </Typography> */}
      <Iframe src="https://onecompiler.com/" width="100%" height="100%" />
    </Wrapper>
  );
};

export default WelcomeMessage;
