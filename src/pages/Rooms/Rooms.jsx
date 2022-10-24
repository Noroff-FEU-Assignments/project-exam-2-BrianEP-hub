import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Typography,
} from '@mui/material';

import styles from './Rooms.module.scss';

const Rooms = () => {
	// console.log(process.env.REACT_APP_BASE_URL);
	useEffect(() => {
		getRooms();
	}, []);
	const [rooms, setRooms] = useState([]);

	const getRooms = () => {
		axios.get(process.env.REACT_APP_ROOMS_URL).then(res => {
			// console.log(res.data.data);
			setRooms(res.data.data);
		});
	};

	return (
		<>
			<Container className={styles.container}>
				<Card>
					<CardContent className={styles.parent}>
						{rooms.map(room => (
							<Card className={styles.child} key={room.id}>
								<CardContent>
									<Typography variant="h6">
										{room.attributes.type.toUpperCase()}
									</Typography>
									<Typography variant="body2">
										Number of beds: {room.attributes.beds}
									</Typography>
									<CardActions>
										<Button variant="contained">Book</Button>
									</CardActions>
								</CardContent>
							</Card>
						))}
					</CardContent>
				</Card>
			</Container>
		</>
	);
};

export default Rooms;
