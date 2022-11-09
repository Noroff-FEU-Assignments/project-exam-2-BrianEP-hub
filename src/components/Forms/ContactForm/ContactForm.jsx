import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	fullName: Yup.string().required('Enter your name'),
	email: Yup.string()
		.required('Email is required')
		.email('Check that you have typed correct email'),
	message: Yup.string()
		.required('Please enter your message')
		.min(20, 'Message cannot be shorter than 20 characters'),
});

const ContactForm = () => {
	const [fullName, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [number, setNumber] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const onContact = () => {
		axios.post(process.env.REACT_APP_CONACT_URL).then(res => {});
	};

	return (
		<form onSubmit={handleSubmit(onContact)}>
			<Grid container spacing={1}>
				<Grid xs={12} sm={6} item>
					<TextField
						label="Full name"
						placeholder="Name"
						variant="outlined"
						fullWidth
						{...register('fullName')}
						value={fullName}
						error={errors.fullName ? true : false}
						helperText={errors.fullName?.message}
						onChange={e => setName(e.target.value)}
					/>
				</Grid>
				<Grid xs={12} sm={6} item>
					<TextField
						type="number"
						label="Number"
						placeholder="Number"
						variant="outlined"
						fullWidth
						{...register('number')}
						value={number}
						error={errors.number ? true : false}
						helperText={errors.number?.message}
						onChange={e => setNumber(e.target.value)}
					/>
				</Grid>
				<Grid xs={12} item>
					<TextField
						type="email"
						label="Email"
						placeholder="Email"
						variant="outlined"
						fullWidth
						{...register('email')}
						value={email}
						error={errors.email ? true : false}
						helperText={errors.email?.message}
						onChange={e => setEmail(e.target.value)}
					/>
				</Grid>
				<Grid xs={12} item>
					<TextField
						multiline
						rows={4}
						label="Message"
						placeholder="Message"
						variant="outlined"
						fullWidth
						{...register('message')}
						value={message}
						error={errors.message ? true : false}
						helperText={errors.message?.message}
						onChange={e => setMessage(e.target.value)}
					/>
				</Grid>
				<Grid xs={12} item>
					<Button type="sumbit" variant="contained" fullWidth>
						Submit
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default ContactForm;
