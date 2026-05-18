"use client";
import React, { useState } from 'react';
import { Box, Typography, Container, Card, CardContent, Grid, Button, Collapse } from '@mui/material';
import { content } from '@/data/content';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const BlogCard = ({ blog }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card elevation={0} sx={{ height: '100%', border: '1px solid #e5e7eb', borderRadius: 3, display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontWeight: 'medium' }}>
          {blog.excerpt}
        </Typography>
        <Collapse in={expanded} collapsedSize={0}>
          <Typography variant="body1" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.primary', whiteSpace: 'pre-wrap', mt: 2 }}>
            {blog.content}
          </Typography>
        </Collapse>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button 
          size="small" 
          onClick={() => setExpanded(!expanded)} 
          endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{ textTransform: 'none' }}
        >
          {expanded ? 'Show Less' : 'Read More'}
        </Button>
      </Box>
    </Card>
  );
};

export default function Blog() {
  return (
    <Box id="blog" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
          📝 Blog Write-ups
        </Typography>
        <Grid container spacing={3}>
          {content.blogs.map((blog, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}