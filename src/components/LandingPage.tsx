import React from 'react';
import { AppBar, Toolbar, Button, Typography, Container, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';

const Header = styled(AppBar)`
  background-color: #000;
  box-shadow: none;
`;

const HeroSection = styled(Box)`
  background-color: #f5f5f5;
  padding: 120px 0 80px;
`;

const Section = styled(Box)`
  padding: 80px 0;
`;

const Footer = styled(Box)`
  background-color: #000;
  color: #fff;
  padding: 60px 0;
`;

const DarkButton = styled(Button)`
  background-color: #000;
  color: #fff;
  &:hover {
    background-color: #333;
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid #000;
  color: #000;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const LandingPage: React.FC = () => {
  return (
    <>
      <Header position="fixed">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
              ProductName
            </Typography>
            <Button color="inherit" href="#features">Features</Button>
            <Button color="inherit" href="#method">Method</Button>
            <Button color="inherit" href="#customers">Customers</Button>
            <Button color="inherit" href="#pricing">Pricing</Button>
            <Button color="inherit">Log in</Button>
            <DarkButton variant="contained">Sign up</DarkButton>
          </Toolbar>
        </Container>
      </Header>

      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h1" align="center" gutterBottom sx={{ fontSize: '4rem', fontWeight: 700 }}>
            A purpose-built tool for planning and building products
          </Typography>
          <Typography variant="h5" align="center" paragraph sx={{ color: '#666', mb: 4 }}>
            Meet the system for modern software development.
            Streamline issues, sprints, and product roadmaps.
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <DarkButton variant="contained" size="large">Start building</DarkButton>
            <OutlinedButton variant="outlined" size="large">Book a demo</OutlinedButton>
          </Box>
        </Container>
      </HeroSection>

      <Section id="features">
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
            Key Features
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Feature {item}
                    </Typography>
                    <Typography variant="body1">
                      Description of feature {item} and its benefits.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="method" sx={{ bgcolor: '#f5f5f5' }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
            Our Method
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((step) => (
              <Grid item xs={12} md={4} key={step}>
                <Typography variant="h5" gutterBottom>
                  Step {step}
                </Typography>
                <Typography variant="body1">
                  Description of step {step} in the process.
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="customers">
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
            Trusted by Industry Leaders
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial}>
                <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
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

      <Section id="pricing" sx={{ bgcolor: '#f5f5f5' }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
            Pricing Plans
          </Typography>
          <Grid container spacing={4}>
            {['Basic', 'Pro', 'Enterprise'].map((plan) => (
              <Grid item xs={12} md={4} key={plan}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {plan}
                    </Typography>
                    <Typography variant="body1">
                      Features and pricing for {plan} plan.
                    </Typography>
                    <DarkButton variant="contained" sx={{ mt: 2 }}>
                      Choose {plan}
                    </DarkButton>
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
                <Box component="ul" sx={{ pl: 2, listStyleType: 'none' }}>
                  <li>Features</li>
                  <li>Integrations</li>
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
                <Box component="ul" sx={{ pl: 2, listStyleType: 'none' }}>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <Typography variant="body2" component="div">
                <Box component="ul" sx={{ pl: 2, listStyleType: 'none' }}>
                  <li>Community</li>
                  <li>Contact</li>
                  <li>DPA</li>
                  <li>Terms of service</li>
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
