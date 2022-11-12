import React, { useState } from 'react';
import { Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

const validationSchema = Yup.object().shape({
	username: Yup.string().required('Please enter your username'),
	password: Yup.string().required('Enter your password'),
});

const LoginForm = ({ open, onClose }) => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const handleLogin = async e => {
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

	/* const goToRegister = () => {
		navigate('/register');
		onClose();
	}; */

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={style}>
				<form onSubmit={handleSubmit(handleLogin)}>
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
								{...register('username')}
								error={errors.username ? true : false}
								helperText={errors.username?.message}
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
								{...register('password')}
								error={errors.password ? true : false}
								helperText={errors.password?.message}
								fullWidth
								onChange={e => setPassword(e.target.value)}
							></TextField>
						</Grid>
						<Grid xs={12} item>
							<Button type="submit" variant="contained" fullWidth>
								Login
							</Button>
						</Grid>
						{/* <Grid xs={12} item>
							<Typography variant="body2">
								Not yet registered? &nbsp;
								<Button onClick={goToRegister}>click here</Button>
							</Typography>
						</Grid> */}
					</Grid>
				</form>
			</Box>
		</Modal>
	);
};

export default LoginForm;
