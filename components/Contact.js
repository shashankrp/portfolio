"use client";
import React from 'react';
import { Box, Typography, Container, Stack, IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { content } from '@/data/content';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8, backgroundColor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
          📬 Contact Me
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
          Interested in working together or just want to chat tech? Reach out—I'm always open to new connections and opportunities!
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton 
            component="a" 
            href={`mailto:${content.contact.email}`} 
            sx={{ color: 'primary.main', border: '1px solid', borderColor: 'divider' }}
          >
            <EmailIcon />
          </IconButton>
          <IconButton 
            component="a" 
            href={content.contact.linkedin} 
            target="_blank"
            sx={{ color: '#0077b5', border: '1px solid', borderColor: 'divider' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton 
            component="a" 
            href={content.contact.github} 
            target="_blank"
            sx={{ color: '#333', border: '1px solid', borderColor: 'divider' }}
          >
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
