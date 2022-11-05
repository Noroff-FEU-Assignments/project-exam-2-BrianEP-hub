import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Box,	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Container,
	Typography,
} from '@mui/material';
import moment from 'moment';

import styles from './Rooms.module.scss';
import Details from '../../components/Details/Details';

const Rooms = () => {
	// console.log(process.env.REACT_APP_BASE_URL);
	useEffect(() => {
		getRooms();
	}, []);

	const [open, setOpen] = useState(false);
	const detailModal = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [rooms, setRooms] = useState([]);

	const getRooms = () => {
		try {
			axios.get(process.env.REACT_APP_ROOMS_URL).then(res => {
				// console.log(res.data.data);
				setRooms(res.data.data);
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Container className={styles.container}>
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
										height="640px"
									/>
									<Typography variant="body1">
										{room.attributes.description}
									</Typography>
								</CardContent>
								<CardActions className={styles.actions}>
									<Typography variant="body2">
										Number of beds: {room.attributes.beds}
									</Typography>
									<Button variant="contained" onClick={detailModal}>
										Details
									</Button>
									{/* Is to open a details modal or redirect to roomDetails page */}
								</CardActions>
							</Card>
						))}
					</CardContent>
					<Details open={open} onClose={handleClose} />
				</Card>
			</Container>
		</>
	);
};

export default Rooms;
