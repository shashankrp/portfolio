"use client";
import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import SecurityIcon from '@mui/icons-material/Security';
import { content } from '@/data/content';

export default function AI() {
  return (
    <Box id="ai" sx={{ py: 8, backgroundColor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
          🤖 Artificial Inteligence and Machine Learning
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', maxWidth: '800px' }}>
          {content.ai.description}
        </Typography>
        <List sx={{ mb: 4 }}>
          {content.ai.skills.map((skill, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: '40px' }}>
                <SecurityIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={skill} />
            </ListItem>
          ))}
        </List>
        <Button 
          variant="outlined" 
          color="primary" 
          href={content.ai.moreLink}
          target="_blank"
          sx={{ textTransform: 'none' }}
        >
          Know more...
        </Button>
      </Container>
    </Box>
  );
}
