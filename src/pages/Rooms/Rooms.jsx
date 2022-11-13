import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Alert,
	AlertTitle,
	Autocomplete,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	CircularProgress,
	Container,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import moment from 'moment';

import styles from './Rooms.module.scss';


const Rooms = () => {
	const [rooms, setRooms] = useState([]);
	const [error, hasError] = useState(false);
	const [loading, isLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(() => {
		getRooms();
	}, []);

	const getRooms = async () => {
		axios
			.get(`${process.env.REACT_APP_ROOMS_URL}?populate=*`)
			.then(res => {
				setRooms(res.data.data);
				isLoading(false);
			})
			.catch(error => {
				console.error(error);
				setErrorMessage(error);
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
		<Container className={styles.container}>
			<Card>
				{loading ? (
					<CircularProgress />
				) : (
					<CardContent className={styles.parent}>
						<Autocomplete
							disablePortal
							options={rooms.map((f) => f.attributes.type)}
							renderInput={rooms => <TextField {...rooms} label="Search" />}
						/>
						{rooms.map(room => (
							<Card key={room.id} className={styles.child}>
								<CardHeader
									title={room.attributes.type.toUpperCase()}
									subheader={`Published: ${moment(
										room.attributes.createdAt,
									).format('DD/MMM/YYYY')}`}
								/>
								<CardContent className={styles.content}>
									<CardMedia
										className={styles.image}
										component="img"
										image={`${room.attributes.images.data.attributes.url}`}
									/>
									<Typography variant="body1">
										{room.attributes.description}
									</Typography>
								</CardContent>
								<CardActions className={styles.actions}>
									<Typography variant="body2">
										Number of beds: {room.attributes.beds}
									</Typography>
									<Button variant="contained" href={`/rooms/${room.id}`}>
										Details
									</Button>
								</CardActions>
							</Card>
						))}
					</CardContent>
				)}
			</Card>
		</Container>
	);
};

export default Rooms;
