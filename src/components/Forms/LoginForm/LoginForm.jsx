import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async e => {
		// e.preventDefault();
		const loginInfo = {
			identifier: username,
			password: password,
		};
		const options = {
			method: 'POST',
			headers: {
				Accept: '*/*',
				'Content-type': 'application/json',
			},
			body: JSON.stringify(loginInfo),
		};
		try {
			const login = await fetch(
				process.env.REACT_APP_AUTH_URL,
				options,
			);
			const res = await login.json();
			localStorage.setItem('user', res.user.username);
			localStorage.setItem('token', res.jwt);
			navigate('/admin');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form  onSubmit={handleLogin}>
			<Grid container spacing={2}>
				<Typography variant="h5">Login</Typography>
				<Grid xs={12} item>
					<TextField
						type="text"
						variant="outlined"
						name="username"
						id="username"
						placeholder="Username"
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
					<Typography variant='body2'>
						Not yet registered? &nbsp;
						<NavLink to="/register">
							click here
						</NavLink>
					</Typography>
				</Grid>
			</Grid>
		</form>
	);
};

export default LoginForm;
