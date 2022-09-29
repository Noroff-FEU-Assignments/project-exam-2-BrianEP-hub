import React from 'react';
import { Grid, Typography } from '@mui/material';
import { ContactForm } from '../../components';

const Contact = () => {
  return (
    <>
      <Grid container>
        <ContactForm />
        <Typography variant="h5">Contact us</Typography>
      </Grid>
    </>
  );
};

export default Contact;
