import React, { useState } from 'react';
import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import axios from 'axios';
import * as Yup from 'yup';
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
	roomType: Yup.string().required('Room type is required'),
	roomBeds: Yup.string().required('Enter number of beds'),
	roomDesc: Yup.string().required('Enter a room description'),
	roomPrice: Yup.string().required('Enter a price table'),
});

const token = localStorage.getItem('token');

const RoomForm = ({ open, onClose }) => {
	const [roomType, setType] = useState('');
	const [roomBeds, setBeds] = useState('');
	const [roomDesc, setDesc] = useState('');
	const [roomPrice, setPrice] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const newRoom = () => {
		let headersList = {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		};
		let bodyContent = JSON.stringify({
			data: {
				type: roomType,
				beds: roomBeds,
				description: roomDesc,
				priceTable: roomPrice,
			},
		});
		let reqOptions = {
			url: process.env.REACT_APP_ROOMS_URL,
			method: 'POST',
			headers: headersList,
			data: bodyContent,
		};

		axios
			.post(reqOptions)
			.then(res => {
				console.log(res.data);
			})
			.catch(error => console.error(error));
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={style}>
				<Typography variant="h4">New room</Typography>
				<form onSubmit={handleSubmit(newRoom)}>
					<Grid container spacing={2}>
						<Grid xs={6} item>
							<TextField
								type="text"
								variant="outlined"
								name="roomType"
								placeholder="Room title"
								value={roomType}
								{...register('roomType')}
								error={errors.roomType ? true : false}
								helperText={errors.roomType?.message}
								onChange={e => setType(e.target.value)}
							></TextField>
						</Grid>
						<Grid xs={6} item>
							<TextField
								type="number"
								variant="outlined"
								name="roomBeds"
								placeholder="Number of beds"
								value={roomBeds}
								{...register('roomBeds')}
								error={errors.roomBeds ? true : false}
								helperText={errors.roomBeds?.message}
								onChange={e => setBeds(e.target.value)}
							></TextField>
						</Grid>
						<Grid xs={12} item>
							<TextField
								multiline
								rows={5}
								type="text"
								variant="outlined"
								name="roomDesc"
								placeholder="Room description"
								value={roomDesc}
								{...register('roomDesc')}
								error={errors.roomDesc ? true : false}
								helperText={errors.roomDesc?.message}
								fullWidth
								onChange={e => setDesc(e.target.value)}
							></TextField>
						</Grid>
						<Grid xs={12} item>
							<TextField
								multiline
								rows={5}
								variant="outlined"
								name="roomPrice"
								placeholder="Room price table"
								value={roomPrice}
								{...register('roomPrice')}
								error={errors.roomPrice ? true : false}
								helperText={errors.roomPrice?.message}
								fullWidth
								onChange={e => setPrice(e.target.value)}
							></TextField>
						</Grid>
						<Grid xs={12} item>
							<Button type="submit" variant="contained" fullWidth>
								Add Room
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Modal>
	);
};

export default RoomForm;
