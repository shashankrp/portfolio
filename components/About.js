"use client";
import React from 'react';
import { Box, Typography, Container, Grid, Divider } from '@mui/material';
import { content } from '@/data/content';

export default function About() {
  return (
    <Box id="about" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
          🙋‍♂️ About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              {content.about.title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              {content.about.description}
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 4, fontWeight: 'bold' }}>
              What do I do?
            </Typography>
            <Typography variant="body1" paragraph>
              {content.about.whatIDo}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 4, fontWeight: 'bold' }}>
              My Approach
            </Typography>
            <Typography variant="body1" paragraph>
              {content.about.approach}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
             <Box 
              component="img"
              src={content.profileImage}
              alt="Shashank R P"
              sx={{ 
                width: '100%', 
                maxWidth: '300px', 
                borderRadius: 4, 
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
