import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import styles from './Navbar.module.scss';

const pages = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'rooms',
    link: '/rooms',
  },
  {
    name: 'contact',
    link: '/contact',
  },
];

const Navbar = () => {
  return (
    <>
      <AppBar position="static" className={styles.navBar}>
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Box className={styles.links}>
              {pages.map(page => (
                <Typography variant="h6" component="div">
                  <NavLink to={page.link} className={styles.navLink}>
                    {page.name}
                  </NavLink>
                </Typography>
              ))}
            </Box>
            <Box>
              <Button color="inherit">Login</Button>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
