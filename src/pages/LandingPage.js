// src/LandingPage.js

import React from 'react';
import { styled } from '@mui/system';
import About from '../components/About';

const GradientBackground = styled('div')({
  minHeight: '100vh',
  background: 'linear-gradient(to bottom, #1E1E1E, #121212)',
  color: 'white',
  padding: '20px',
  overflowY: 'auto',
});

function HomePage() {
  return (
    <GradientBackground>
      <About />
    </GradientBackground>
  );
}

export default HomePage;
