"use client";
import React from 'react';
import { Box, Typography, Container, Divider, Link } from '@mui/material';
import { content } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ py: 6, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Divider sx={{ mb: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} • Built by {content.name}
          </Typography>
          <Link 
            href={content.contact.linkedin} 
            target="_blank" 
            underline="hover" 
            color="inherit" 
            sx={{ fontWeight: 'medium' }}
          >
            {content.name} - Software Engineer
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
