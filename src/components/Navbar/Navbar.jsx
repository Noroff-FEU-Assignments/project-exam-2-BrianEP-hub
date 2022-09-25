import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import styles from './Navbar.module.scss';

const pages = ['home', 'rooms', 'contact'];

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar className={styles.navBar}>
            <Box className={styles.links}>
              {pages.map(page => (
                <Typography variant="h6" component="div">
                  <NavLink to={page} className={styles.navLink}>
                    {page}
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
