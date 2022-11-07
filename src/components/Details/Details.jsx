/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';

const Details = () => {
	let { id } = useParams();
	const [rooms, setRooms] = useState({});
	const [ loading, isLoading ] = useState(false)
	useEffect(() => {
		getRoom();
	}, []);

	const getRoom = async () => {
		axios
			.get(`${process.env.REACT_APP_ROOMS_URL}/${id}`)
			.then(res => {
				setRooms(res.data.data);
				isLoading(true)
			})
			.catch(error => console.error(error));
	};

	return (
		<Container>
			{loading ?
				<Typography variant="h6">{rooms.attributes.type}</Typography>
			: <Typography>Loading</Typography>
			}
		</Container>
	);
};

export default Details;
