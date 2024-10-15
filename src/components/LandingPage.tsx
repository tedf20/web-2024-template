import React from 'react';
import { AppBar, Toolbar, Button, Typography, Container, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';

const Header = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
  color: #000;
`;

const HeroSection = styled(Box)`
  background-color: #F3F4F6;
  padding: 100px 0;
`;

const Section = styled(Box)`
  padding: 80px 0;
`;

const Footer = styled(Box)`
  background-color: #1F2937;
  color: #fff;
  padding: 40px 0;
`;

const LandingPage: React.FC = () => {
  return (
    <>
      <Header position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ProductName
            </Typography>
            <Button color="inherit" href="#features">Features</Button>
            <Button color="inherit" href="#how-it-works">How it works</Button>
            <Button color="inherit" href="#testimonials">Testimonials</Button>
            <Button variant="contained" color="primary">Get Started</Button>
          </Toolbar>
        </Container>
      </Header>

      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h1" gutterBottom>
                Your Product Tagline
              </Typography>
              <Typography variant="body1" paragraph>
                A brief description of your product and its main benefit.
              </Typography>
              <Button variant="contained" color="primary" size="large">
                Start Free Trial
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Replace with your product illustration */}
              <Box sx={{ bgcolor: '#DDD', height: 300, borderRadius: 2 }} />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Section id="features">
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Feature {item}
                    </Typography>
                    <Typography variant="body2">
                      Description of feature {item} and its benefits.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="how-it-works" sx={{ bgcolor: '#F3F4F6' }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((step) => (
              <Grid item xs={12} md={4} key={step}>
                <Typography variant="h5" gutterBottom>
                  Step {step}
                </Typography>
                <Typography variant="body2">
                  Description of step {step} in the process.
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="testimonials">
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            What Our Clients Say
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial}>
                <Card>
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      "Testimonial quote {testimonial}."
                    </Typography>
                    <Typography variant="subtitle2">
                      - Client Name {testimonial}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section sx={{ bgcolor: '#F3F4F6' }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Who It's For
          </Typography>
          <Grid container spacing={4}>
            {['Audience 1', 'Audience 2', 'Audience 3'].map((audience) => (
              <Grid item xs={12} md={4} key={audience}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {audience}
                    </Typography>
                    <Typography variant="body2">
                      Specific value proposition for {audience}.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Footer>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                ProductName
              </Typography>
              <Typography variant="body2">
                Brief description of the company or product.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom>
                Product
              </Typography>
              <Typography variant="body2" component="div">
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>FAQ</li>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <Typography variant="body2" component="div">
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom>
                Legal
              </Typography>
              <Typography variant="body2" component="div">
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>Privacy</li>
                  <li>Terms</li>
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Footer>
    </>
  );
};

export default LandingPage;
