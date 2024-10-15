import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ApplicationPage from './components/ApplicationPage';
import PdfBankPage from './components/PdfBankPage';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/web-2024-template">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/submit-application" element={<ApplicationPage />} />
          <Route path="/pdf-bank" element={<PdfBankPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
