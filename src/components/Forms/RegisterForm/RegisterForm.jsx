import React, { useState } from 'react';
import {
	Alert,
	AlertTitle,
	Button,
	Grid,
	Modal,
	TextField,
	Typography,
} from '@mui/material';
import * as Yup from 'yup';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

import styles from './register.module.scss';

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

const paymentOptions = [
	{ value: true, label: 'Pay now' },
	{ value: false, label: 'Pay on arrival' },
];

const validationSchema = Yup.object().shape({
	fullname: Yup.string().required('Name is required'),
	checkin: Yup.string().required('Specify checkin date'),
	leaveDate: Yup.string().required('Specify checkout date'),
	roomNo: Yup.string().required(''),
});

const RegisterForm = ({ open, onClose, room }) => {
	const [fullname, setName] = useState('');
	const [checkin, setCheckin] = useState('');
	const [leaveDate, setLeaveDate] = useState('');
	const [roomNo, setRoomNo] = useState(room);
	const [errorMessage, setErrorMessage] = useState('');
	const [error, setError] = useState(false);
	const [paid, setPaid] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const handleChange = e => {
		setPaid(e.target.value);
	};

	const bookRoom = () => {
		let headerList = {
			'Content-Type': 'application/json',
		};
		let bodyContent = JSON.stringify({
			data: {
				fullname: fullname,
				checkin: checkin,
				leaveDate: leaveDate,
				roomNo: roomNo,
				paid: paid,
			},
		});
		let reqOptions = {
			url: process.env.REACT_APP_GUEST_URL,
			method: 'POST',
			headers: headerList,
			data: bodyContent,
		};

		axios
			.request(reqOptions)
			.then(res => {
				console.log(res.data);
				reset();
			})
			.catch(error => {
				console.error(error);
				setErrorMessage(error);
				setError(true);
			});
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={style}>
				<Typography variant="h4">Book</Typography>
				<form onSubmit={handleSubmit(bookRoom)}>
					<Grid container spacing={2}>
						<Grid xs={12} item>
							<TextField
								type="text"
								variant="outlined"
								name="fullname"
								label="Full Name"
								value={fullname}
								{...register('fullname')}
								error={errors.fullname ? true : false}
								helperText={errors.fullname?.message}
								onChange={e => setName(e.target.value)}
								fullWidth
							></TextField>
						</Grid>
						<Grid xs={6} item>
							<TextField
								type="text"
								variant="outlined"
								name="checkin"
								label="Checkin date"
								value={checkin}
								{...register('checkin')}
								error={errors.checkin ? true : false}
								helperText={errors.checkin?.message}
								onChange={e => setCheckin(e.target.value)}
							></TextField>
						</Grid>
						<Grid xs={6} item>
							<TextField
								type="text"
								variant="outlined"
								name="leaveDate"
								label="Checkout date"
								value={leaveDate}
								{...register('leaveDate')}
								error={errors.leaveDate ? true : false}
								helperText={errors.leaveDate?.message}
								onChange={e => setLeaveDate(e.target.value)}
							></TextField>
						</Grid>
						<Grid xs={6} item>
							<Typography variant="caption">Choose payment option</Typography>
							<div>
								{paymentOptions.map((p, i) => (
									<label key={i}>
										<input
											className={styles.radio}
											type="radio"
											name="paid"
											value={p.value}
											onChange={handleChange}
										/>
										{p.label}
									</label>
								))}
							</div>
							{/* <TextField
								type="text"
								variant="outlined"
								name="paid"
								label="Paid"
								value={paid}
								{...register('paid')}
								error={errors.paid ? true : false}
								helperText={errors.paid?.message}
								onChange={e => setPaid(e.target.value)}
							></TextField> */}
						</Grid>
						<Grid xs={6} item>
							<TextField
								type="text"
								variant="filled"
								name="roomNo"
								label="Room number"
								value={roomNo}
								{...register('roomNo')}
								inputProps={{ readOnly: true }}
								error={errors.roomNo ? true : false}
								helperText={errors.roomNo?.message}
								onChange={e => setRoomNo(e.target.value)}
							></TextField>
						</Grid>
						<Grid xs={12} item>
							{error ? (
								<Alert severity="error" className="error">
									<AlertTitle>{errorMessage.code}</AlertTitle>
									{errorMessage.message}
								</Alert>
							) : (
								<Button type="submit" variant="contained" fullWidth>
									Book
								</Button>
							)}
						</Grid>
					</Grid>
				</form>
			</Box>
		</Modal>
	);
};

export default RegisterForm;
