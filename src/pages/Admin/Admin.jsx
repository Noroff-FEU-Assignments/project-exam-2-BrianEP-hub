import React from 'react';
import { Card, Container, Typography } from '@mui/material';

const Admin = () => {

  const user = localStorage.getItem('user');


  return(
    <>
    <Container>
      <Card>
        <Typography variant="h6">Welcome {username}</Typography>
      </Card>
    </Container>
    </>
  )
};

export default Admin;
