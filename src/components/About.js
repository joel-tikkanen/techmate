// src/components/About.js
import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from '@mui/icons-material/Twitter';
import { Link as RouterLink } from "react-router-dom";

const ElevatedBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#1E1E1E",
  color: "white",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  margin: theme.spacing(4, 10),
  textAlign: "left",
}));

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  "& a": {
    margin: theme.spacing(0, 1),
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.3s",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const getGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Hyvää huomenta";
  } else if (currentHour < 18) {
    return "Hyvää päivää";
  } else {
    return "Hyvää iltaa";
  }
};

const About = () => {
  return (
    <ElevatedBox>
      <Typography variant="h4" gutterBottom>
        Tieto Techmatesta
      </Typography>
      {/* <Typography variant="body1" paragraph>
        {getGreeting()},
      </Typography> */}
      <Typography variant="body1" paragraph>
        Techmate on ohjelmistoyritys, jonka tavoitteena on tarjota
        asiakaskeskeisiä, kustannustehokkaita ja laadukkaita
        ohjelmistoratkaisuja. Palvelumme kattavat kaiken perussivustoista ja
        -sovelluksista monimutkaisiin ohjelmiin. 
        <br/>
        <br/>
        Jos sinulla on mielessä
        ohjelma, jonka haluaisit toteuttaa, toivomme, että otat yhteyttä
        matalalla kynnyksellä. <br/><br/>Parhaiten saat meidät kiinni sähköpostitse <b>techmate.tmi@gmail.com</b>.
        <br/><br/>Suosittelemme myös perehtymään portfoliosta löytyviin toteutettuihin
        projekteihin!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/portfolio"
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        Perehdy portfolioon
      </Button>
      <SocialMediaContainer>
        <Link
          href="https://github.com/joel-tikkanen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/joel-tikkanen-3b12652a3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </Link>
        {/* <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </Link> */}
      </SocialMediaContainer>
    </ElevatedBox>
  );
};

export default About;
