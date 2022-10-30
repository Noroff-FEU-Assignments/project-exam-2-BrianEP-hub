import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const register = (e) => {
    e.preventDefault();
		axios
			.post(process.env.REACT_APP_AUT_REGISTER_URL, {
				username,
				password,
				email,
			})
			.then(res => {
				setUser(res);

        if(user){
          
          navigate('/')
        }
			});
	};

	return (
		<form onSubmit={register}>
			<Grid container spacing={2}>
				<Grid xs={12} item>
					<TextField
						type="text"
						variant="outlined"
						name="username"
						id="username"
						placeholder="username"
						value={username}
						fullWidth
						onChange={e => setUsername(e.target.value)}
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
	);
};

export default Register;
