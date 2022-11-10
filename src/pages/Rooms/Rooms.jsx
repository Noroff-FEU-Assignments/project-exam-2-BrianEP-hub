import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
	Container,
	Stack,
	Typography,
} from '@mui/material';
import moment from 'moment';

import styles from './Rooms.module.scss';

const Rooms = () => {
	useEffect(() => {
		getRooms();
	}, []);
	const [rooms, setRooms] = useState([]);
	const [loading, isLoading] = useState(true);
	const [error, hasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const getRooms = async () => {
			axios.get(process.env.REACT_APP_ROOMS_URL).then(res => {
				setRooms(res.data.data);
			}).catch(error => {
				console.error(error);
				setErrorMessage(error);
				isLoading(false);
				hasError(true);
			}) ;	
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
				{loading ? (
					<CircularProgress />
				) : (
				<Card>
					<CardContent className={styles.parent}>
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
										image={`${process.env.REACT_APP_API_BASE_URL}${room.attributes.image_url}`}
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
				</Card>
				)}
			</Container>
	);
};

export default Rooms;
