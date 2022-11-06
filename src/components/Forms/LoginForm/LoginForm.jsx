import React, { useState } from 'react';
import { Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/system';


const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: '#fff',
	border: '1px solid #000',
	boxShadow: 24,
	p: 4,
};

const LoginForm = ({ open, onClose, closeAfterTransition}) => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async e => {
		e.preventDefault();
		try {
			axios
				.post(process.env.REACT_APP_AUTH_URL, {
					identifier: username,
					password: password,
				})
				.then(res => {
					localStorage.setItem('user', res.data.user.username);
					localStorage.setItem('token', res.data.jwt);
					navigate('/profile');
					onClose();
				});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={style}>
				<form onSubmit={handleLogin}>
					<Grid container spacing={2}>
						<Typography variant="h5">Login</Typography>
						<Grid xs={12} item>
							<TextField
								type="text"
								variant="outlined"
								name="username"
								id="username"
								placeholder="Username/email"
								value={username}
								required
								fullWidth
								onChange={e => setUsername(e.target.value)}
							></TextField>
						</Grid>
						<Grid xs={12} item>
							<TextField
								type="password"
								variant="outlined"
								name="password"
								placeholder="Password"
								id="password"
								value={password}
								required
								fullWidth
								onChange={e => setPassword(e.target.value)}
							></TextField>
						</Grid>
						<Grid xs={12} item>
							<Button type="submit" variant="contained" fullWidth>
								Login
							</Button>
						</Grid>
						<Grid xs={12} item>
							<Typography variant="body2">
								Not yet registered? &nbsp;
								<NavLink to="/register">click here</NavLink>
							</Typography>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Modal>
	);
};

export default LoginForm;
