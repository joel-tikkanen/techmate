// src/components/About.js
import React from "react";
import { Box, Typography, Button, Link, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouterLink } from "react-router-dom";

const ElevatedBox = styled(Container)(({ theme }) => ({
  backgroundColor: "#1E1E1E",

  color: "white",
  padding: theme.spacing(5),
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const StyledList = styled('ul')(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  marginBottom: theme.spacing(3),
  fontFamily: 'SF Mono, monospace',
}));

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  '& a': {
    margin: theme.spacing(0, 2),
    color: 'inherit',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const About = () => {
  return (
    <ElevatedBox maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <StyledTypography variant="h4" align="center" gutterBottom>
            Esittely
          </StyledTypography>
        </Grid>
        <Grid item xs={12}>
          <StyledTypography variant="body1">
            Techmate on ohjelmistoyritys, joka tarjoaa
            asiakaskeskeisiä, kustannustehokkaita ja samalla laadukkaita
            ohjelmistoratkaisuja kaikenkokoisille yrityksille. <br/> <br/>Palvelumme kattavat 
            kaiken verkkosivuista mobiilisovelluksiin ja monimutkaisempiin järjestelmiin.
          </StyledTypography>

          <StyledTypography variant="body1">
            Tarjoamme ratkaisuja yrityksesi digitaalisiin tarpeisiin:
          </StyledTypography>
          <StyledList>
            <li>Uudet verkkosivut</li>
            <li>Mobiili- tai työpöytäsovellukset</li>
            <li>Muut räätälöydyt ohjelmistot</li>
          </StyledList>

          <StyledTypography variant="body1">
            Kannustamme sinua ottamaan meihin yhteyttä matalalla kynnyksellä.
            Autamme mielellämme löytämään juuri teidän yrityksellenne sopivan ratkaisun.
          </StyledTypography>

          <StyledTypography variant="body1">
            Parhaiten saat meidät kiinni sähköpostitse <b>techmate.tmi@gmail.com</b>
          </StyledTypography>

          <StyledTypography variant="body1">
            Suosittelemme myös perehtymään portfoliosta löytyviin toteutettuihin projekteihin!
          </StyledTypography>
        </Grid>
        {/* <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/portfolio"
            size="large"
          >
            Perehdy portfolioon
          </Button>
        </Grid> */}
        <Grid item xs={12}>
          <SocialMediaContainer>
            <Link
              href="https://github.com/joel-tikkanen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joel-tikkanen-3b12652a3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </SocialMediaContainer>
        </Grid>
      </Grid>
    </ElevatedBox>
  );
};

export default About;