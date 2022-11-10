import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	username: Yup.string()
		.required('Username is required')
		.min(6, 'Username has to be atleast 6 characters'),
	fullName: Yup.string()
		.required('Enter your name'),
	email: Yup.string()
		.required('Email is required')
		.email('Check that you have typed correct email'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password has to be atleast 8 characters'),
});

const RegisterForm = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const onRegister = () => {
		axios
			.post(process.env.REACT_APP_AUT_REGISTER_URL, {
				username,
				password,
				email,
				role: 'Public',
			})
			.then(res => {
				setUser(res);

				if (!user) {
					navigate('/');
				}
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit(onRegister)}>
				<Grid container spacing={2}>
					<Grid xs={12} item>
						<Typography variant="h3">Register</Typography>
					</Grid>
					<Grid xs={12} item>
						<TextField
							type="text"
							variant="outlined"
							name="username"
							id="username"
							placeholder="username"
							value={username}
							fullWidth
							{...register('username')}
							error={errors.username ? true : false}
							helperText={errors.username?.message}
							onChange={e => setUsername(e.target.value)}
						></TextField>
					</Grid>
					<Grid xs={12} item>
						<TextField
							type="text"
							variant="outlined"
							name="name"
							id="fullName"
							placeholder="name"
							value={fullName}
							fullWidth
							{...register('fullName')}
							error={errors.fullName ? true : false}
							helperText={errors.fullName?.message}
							onChange={e => setFullName(e.target.value)}
						></TextField>
					</Grid>
					<Grid xs={12} item>
						<TextField
							type="text"
							variant="outlined"
							name="email"
							id="email"
							placeholder="email"
							value={email}
							fullWidth
							{...register('email')}
							error={errors.email ? true : false}
							helperText={errors.email?.message}
							onChange={e => setEmail(e.target.value)}
						></TextField>
					</Grid>
					<Grid xs={12} item>
						<TextField
							type="password"
							variant="outlined"
							name="password"
							id="password"
							placeholder="password"
							value={password}
							fullWidth
							{...register('password')}
							error={errors.password ? true : false}
							helperText={errors.password?.message}
							onChange={e => setPassword(e.target.value)}
						></TextField>
					</Grid>
					<Grid xs={12} item>
						<Button type="submit" variant="contained" fullWidth>
							Register
						</Button>
					</Grid>
				</Grid>
			</form>
		</>
	);
};

export default RegisterForm;
