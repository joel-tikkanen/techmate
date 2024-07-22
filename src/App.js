// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import Footer from './components/Footer';
import { Box } from '@mui/material';
// Create a theme instance with Open Sans as the default font
const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1E1E",
        },
      },
    },
  },
});

// Styled components
const NavLink = styled(Button)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  margin: theme.spacing(1),
  fontSize: '1.2rem',
  borderRadius: 25,
  transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: '#ffffff20',
    color: '#ffffff',
    transform: 'scale(1.1)',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 'bold',
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <AppBar position="static">
            <Toolbar>
              <Title variant="h4">
                Techmate
              </Title>
              <NavLink component={Link} to="/">
                Home
              </NavLink>
              <NavLink component={Link} to="/portfolio">
                Portfolio
              </NavLink>
            </Toolbar>
          </AppBar>

          <Box component="main" sx={{ flexGrow: 1, paddingBottom: '64px' }}>
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
