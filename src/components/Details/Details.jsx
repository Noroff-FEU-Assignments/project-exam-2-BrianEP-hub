/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	CircularProgress,
	Typography,
} from '@mui/material';
import axios from 'axios';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const Details = () => {
	let { id } = useParams();
	const [room, setRoom] = useState({});
	const [loading, isLoading] = useState(true);
	useEffect(() => {
		getRoom();
	}, []);

	const getRoom = async () => {
		axios
			.get(`${process.env.REACT_APP_ROOMS_URL}/${id}`)
			.then(res => {
				setRoom(res.data.data);
				isLoading(false);
			})
			.catch(error => console.error(error));
	};

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
							height='640px'
							component="img"
							image={`${process.env.REACT_APP_API_BASE_URL}${room.attributes.image_url}`}
						/>
						<Typography variant="h6">{room.attributes.type}</Typography>
					</CardContent>
					<CardActions></CardActions>
				</Card>
			)}
		</Container>
	);
};

export default Details;
