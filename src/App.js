// src/App.js

import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

// Create a theme instance with Open Sans as the default font
const theme = createTheme({
  typography: {
    // fontFamily: 'Open Sans, Arial, sans-serif',

    fontFamily: "SF Mono, monospace",
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
        },
      },
    },
  },
});

// Styled components
const NavLink = styled(Button)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  margin: theme.spacing(1),
  fontSize: "1.2rem",
  borderRadius: 25,
  transition: "background-color 0.3s, color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: "#ffffff20",
    color: "#ffffff",
    transform: "scale(1.1)",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: "bold",
}));

function App() {
  const [underscore, setUnderscore] = useState(true);


  useEffect(() => {

    const interval = setInterval(() => {
      setUnderscore(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#121212"
          }}
        >
          <AppBar position="static">
            <Toolbar>
              <Title variant="h4">
                {">Techmate"}
                {underscore ? "_" : ""}
              </Title>
              {/* <NavLink component={Link} to="/">
                Home
              </NavLink>
              <NavLink component={Link} to="/portfolio">
                Portfolio
              </NavLink> */}
            </Toolbar>
          </AppBar>

          <Box component="main" sx={{ flexGrow: 1, paddingBottom: "64px" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
          </Box>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
