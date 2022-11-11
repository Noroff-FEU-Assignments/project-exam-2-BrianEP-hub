/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
	Alert,
	AlertTitle,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	CircularProgress,
	Stack,
	Typography,
} from '@mui/material';
import axios from 'axios';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { RegisterForm } from '../Forms';

const Details = () => {
	let { id } = useParams();
	const [room, setRoom] = useState({});
	const [loading, isLoading] = useState(true);
	const [error, hasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [open, setOpen] = useState(false);
	const bookingModal = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		getRoom();
	}, []);

	const getRoom = async () => {
		axios
			.get(`${process.env.REACT_APP_ROOMS_URL}/${id}?populate=*`)
			.then(res => {
				setRoom(res.data.data);
				isLoading(false);
			})
			.catch(error => {
				console.error(error);
				setErrorMessage(error);
				isLoading(false);
				hasError(true);
			});
	};

	if (error) {
		return (
			<>
				<Stack sx={{ width: '100%' }}>
					<Alert severity="error" className="error">
						<AlertTitle>{errorMessage.code}</AlertTitle>
						{errorMessage.message}
					</Alert>
				</Stack>
			</>
		);
	}

	return (
		<Container>
			{loading ? (
				<CircularProgress />
			) : (
				<Card>
					<CardHeader
						title={room.attributes.type.toUpperCase()}
						subheader={`Published: ${moment(room.attributes.createdAt).format(
							'DD/MM/YYY',
						)}`}
					/>
					<CardContent>
						<CardMedia
							height="640px"
							component="img"
							image={`${process.env.REACT_APP_API_BASE_URL}${room.attributes.images.data.attributes.url}`}
						/>
						<Typography variant="h6">{room.attributes.type}</Typography>
						<Typography
							variant="body2"
							dangerouslySetInnerHTML={{ __html: room.attributes.priceTable }}
						/>
					</CardContent>
					<CardActions>
						<Button variant="contained" onClick={bookingModal}>Book</Button>
					</CardActions>
					<RegisterForm open={open} onClose={handleClose} room={room.attributes.roomNo} />
				</Card>
			)}
		</Container>
	);
};

export default Details;
