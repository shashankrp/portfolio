"use client";
import React from 'react';
import { Box, Typography, Container, Chip, Grid, Paper } from '@mui/material';
import { content } from '@/data/content';

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
          Skills
        </Typography>
        <Grid container spacing={2}>
          {content.skills.map((skill) => (
            <Grid key={skill.name}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5, 
                  border: '1px solid #e5e7eb',
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }
                }}
              >
                <Typography sx={{ fontSize: '1.5rem' }}>{skill.icon}</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{skill.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
