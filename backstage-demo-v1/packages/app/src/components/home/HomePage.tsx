import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

export const HomePage = () => {
  const handleButtonClick = () => {
    alert("Exploring Backstage!");
  };

  return (
    <Container maxWidth="md">
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        height="100vh"
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Backstage!
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Your platform for building developer portals.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleButtonClick}
        >
          Start Exploring
        </Button>
      </Box>
    </Container>
  );
};
