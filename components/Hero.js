"use client";
import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { content } from '@/data/content';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  return (
    <Box id="home" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Hi, I'm Shashank 👋
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 2 }}>
              {content.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', maxWidth: '600px', mb: 4 }}>
              {content.description}
            </Typography>
            <Button 
              variant="text" 
              color="primary" 
              endIcon={<ArrowForwardIcon />}
              href="#about"
              sx={{ textTransform: 'none', fontWeight: 'bold', fontSize: '1rem' }}
            >
              Know more about me
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ fontSize: '100px' }}>💻</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
