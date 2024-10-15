import React, { useState } from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, TextField } from '@mui/material';
import { styled } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { parsePDF } from '../utils/pdfParser';

const HeroSection = styled(Box)`
  background-color: #f5f5f5;
  padding: 120px 0 80px;
`;

const Section = styled(Box)`
  padding: 80px 0;
`;

const UploadButton = styled(Button)`
  margin-top: 20px;
`;

const FileInput = styled('input')`
  display: none;
`;

const PdfBankPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [parsedData, setParsedData] = useState<any | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const result = await parsePDF(file);
        setParsedData(result);
        console.log('Parsed data:', result);
      } catch (error) {
        console.error('Error parsing PDF:', error);
      }
    }
  };

  return (
    <>
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h1" align="center" gutterBottom sx={{ fontSize: '3.5rem', fontWeight: 700 }}>
            PDF Bank Statement Parser
          </Typography>
          <Typography variant="h5" align="center" paragraph sx={{ color: '#666', mb: 4 }}>
            Effortlessly extract and analyze your financial data from PDF bank statements.
          </Typography>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    Upload Your Statement
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Simply upload your PDF bank statement, and our advanced AI will parse and organize your financial data.
                  </Typography>
                  <FileInput
                    accept=".pdf"
                    id="contained-button-file"
                    type="file"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="outlined" component="span" startIcon={<CloudUploadIcon />}>
                      Select PDF
                    </Button>
                  </label>
                  {file && (
                    <Typography variant="body2" sx={{ mt: 2 }}>
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
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={0} sx={{ height: '100%', bgcolor: '#f5f5f5' }}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    Parsed Data
                  </Typography>
                  {parsedData ? (
                    <TextField
                      multiline
                      fullWidth
                      rows={10}
                      value={JSON.stringify(parsedData, null, 2)}
                      variant="outlined"
                    />
                  ) : (
                    <Typography variant="body1">
                      Upload a PDF to see the parsed data here.
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default PdfBankPage;
