import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from 'styled-components';
import { parsePDF } from '../utils/pdfParser';

const UploadButton = styled(Button)`
  margin-top: 20px;
`;

const FileInput = styled.input`
  display: none;
`;

const LandingPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const parsedData = await parsePDF(file);
        console.log('Extracted data:', JSON.stringify(parsedData, null, 2));
      } catch (error) {
        console.error('Error parsing PDF:', error);
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              BankState
            </Typography>
            <Typography variant="h2" gutterBottom>
              Dynamic PDF Statement Parsing
            </Typography>
            <Typography variant="body1" paragraph>
              Upload any PDF statement and our advanced system will dynamically analyze its structure, extracting relevant information and providing you with a structured JSON output.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Upload Your Statement
              </Typography>
              <FileInput
                accept=".pdf"
                id="contained-button-file"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                  Select PDF
                </Button>
              </label>
              {file && (
                <Typography variant="body2" style={{ marginTop: '1rem' }}>
                  Selected file: {file.name}
                </Typography>
              )}
              <UploadButton
                variant="contained"
                color="primary"
                onClick={handleUpload}
                disabled={!file}
              >
                Upload and Parse
              </UploadButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
