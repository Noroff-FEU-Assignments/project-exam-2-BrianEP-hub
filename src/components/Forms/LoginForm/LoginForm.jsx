import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';

const LoginForm = () => {
	const [validated, setValidated] = useState(false);
	const [username, setUsername] = useState('');
	const [password] = useState('');

	const handleLogin = async e => {
		const form = e.currentTarget;

		const loginInfo = {
			identifier: form.username,
			password: form.password,
		};
		axios
			.post(process.env.REACT_APP_AUTH_URL, JSON.stringify(loginInfo))
			.then(res => {
				console.log(res.data);
				localStorage.setItem('token', res.data.jwt);
				setUsername(res.data.username);
				setValidated(true);
			});
		e.preventDefault();
		debugger;
	};

	return (
		<form validated={validated} onSubmit={handleLogin}>
			<Grid container spacing={2}>
				<Typography variant="h5">Login</Typography>
				<Grid xs={12} item>
					<TextField
						type="text"
						variant="outlined"
						name="username"
						id="username"
						placeholder="Username"
						// value={username}
						required
						fullWidth
					></TextField>
				</Grid>
				<Grid xs={12} item>
					<TextField
						type="password"
						variant="outlined"
						name="password"
						placeholder="Password"
						id="password"
						// value={password}
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
