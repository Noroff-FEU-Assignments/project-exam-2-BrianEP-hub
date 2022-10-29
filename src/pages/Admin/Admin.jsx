import React from 'react';
import { Card, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('user');

  const logout = () => {
    localStorage.clear();
    navigate('/')
  }



  return(
    <>
    <Container>
      <Card>
        <Typography variant="h6">Welcome {username}</Typography>
      </Card>
    </Container>
    <Button variant='contained' onClick={logout}>
      Log out
    </Button>
    </>
  )
};

export default Admin;
