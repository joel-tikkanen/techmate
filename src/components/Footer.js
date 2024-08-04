// src/components/Footer.js

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#212121",
  color: "white",
  padding: theme.spacing(2),
  textAlign: "center",
  fontFamily: 'SF Mono, monospace',
  position: "fixed",
  bottom: 0,
  width: "100%",
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body3">
        © {new Date().getFullYear()} Techmate
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
