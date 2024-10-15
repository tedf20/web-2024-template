import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import LandingPage from './components/LandingPage';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
