"use client";
import React from 'react';
import { Box, Typography, Container, Paper, Divider } from '@mui/material';
import { content } from '@/data/content';
import BusinessIcon from '@mui/icons-material/Business';

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: 8, backgroundColor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
          🏢 Experience - 4.8 Years
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {content.experience.map((exp, index) => (
            <Paper key={index} elevation={0} sx={{ p: 4, border: '1px solid #e5e7eb', borderRadius: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {exp.location} • {exp.duration}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {exp.role}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
                {exp.period}
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {exp.points.map((point, i) => (
                  <Typography component="li" key={i} variant="body1" sx={{ mb: 1 }}>
                    {point}
                  </Typography>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
