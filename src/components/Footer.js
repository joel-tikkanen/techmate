// src/components/Footer.js

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#1E1E1E",
  color: "white",
  padding: theme.spacing(2),
  textAlign: "center",
  position: "fixed",
  bottom: 0,
  width: "100%",
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2">
        © {new Date().getFullYear()} Techmate. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
