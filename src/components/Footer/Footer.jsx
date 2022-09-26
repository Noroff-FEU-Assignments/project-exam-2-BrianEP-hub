import React from 'react';
import { BottomNavigation, Typography } from '@mui/material';
import styles from './Footer.module.scss';

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <BottomNavigation sx={{ flexGrow: 1 }} className={styles.footer}>
      <div className={styles.copy}>
        <Typography variant="h6">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="h6">
          Copyright Brian B &copy; {fullYear}
        </Typography>
      </div>
    </BottomNavigation>
  );
};

export default Footer;
