import React, { useEffect } from 'react';
import { Card, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
	const navigate = useNavigate();
	const username = localStorage.getItem('user');

  useEffect(() => {
    if(!username){
      navigate('/');
    }
  })

	const logout = () => {
		localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 100)
	};

	return (
		<>
			<Container>
				<Card>
					<Typography variant="h6">Welcome {username}</Typography>
				</Card>
			</Container>
			<Button variant="contained" onClick={logout}>
				Log out
			</Button>
		</>
	);
};

export default Profile;
