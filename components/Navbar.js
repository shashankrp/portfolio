"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Blog', href: '#blog' },
  { name: 'Cyber Security', href: '#cybersecurity' },
  { name: 'Contact', href: '#contact' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Shashank R P
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link href={item.href} passHref style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary={item.name} sx={{ textAlign: 'center', py: 1 }} />
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Button variant="contained" color="primary" sx={{ m: 2 }} href="https://drive.google.com/file/d/1gzb3m_BdrhNwRfRFuF7IblGXIHCnRZip/view?usp=sharing" target="_blank">
            Resume
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', cursor: 'pointer' }}
          >
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Shashank R P
            </Link>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button key={item.name} href={item.href} sx={{ color: 'text.primary', textTransform: 'none' }}>
                {item.name}
              </Button>
            ))}
            <Button variant="contained" color="primary" href="https://drive.google.com/file/d/1gzb3m_BdrhNwRfRFuF7IblGXIHCnRZip/view?usp=sharing" target="_blank" sx={{ textTransform: 'none' }}>
              Resume
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
