import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = e => {
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagination();
    }
    setValidated(true);
  };

  return (
    <form validated={validated} onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} item>
          <TextField
            label="Full name"
            placeholder="Name"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField
            type="number"
            label="Number"
            placeholder="Number"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            type="email"
            label="Email"
            placeholder="Email"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            multiline
            rows={4}
            label="Message"
            placeholder="Message"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid xs={12} item>
          <Button type="sumbit" variant="contained" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
