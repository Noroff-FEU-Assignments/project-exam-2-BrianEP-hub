import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';

const LoginForm = () => {
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
      <Grid container spacing={2}>
        <Typography variant="h5">Login</Typography>
        <Grid xs={12} item>
          <TextField
            type="text"
            variant="outlined"
            placeholder="Username"
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid xs={12} item>
          <TextField
            type="password"
            variant="outlined"
            placeholder="Password"
            required
            fullWidth
          ></TextField>
        </Grid>
        <Grid xs={12} item>
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
