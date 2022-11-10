/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {
	Stack,
	Alert,
	Card,
	Container,
	Typography,
	Button,
	CardContent,
	CardHeader,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './profile.module.scss';

const Profile = () => {
	useEffect(() => {
		getRooms();
	}, []);
	useEffect(() => {
		getMessages();
	}, []);
	useEffect(() => {
		getGuests();
	}, []);
	useEffect(() => {
		if (!username) {
			navigate('/');
		}
	});
	const navigate = useNavigate();
	const [rooms, setRooms] = useState([]);
	const [messages, setMessages] = useState([]);
	const [guests, setGuests] = useState([]);
	const [error, hasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const username = localStorage.getItem('user');
	const token = localStorage.getItem('token');

	const getRooms = () => {
		axios
			.get(process.env.REACT_APP_ROOMS_URL)
			.then(res => {
				setRooms(res.data.data);
			})
			.catch(error => {
				console.error(error);
				hasError(true);
				setErrorMessage(error);
			});
	};

	const getMessages = () => {
		let headerList = {
			Authorization: `Bearer ${token}`,
		};
		let reqOptions = {
			url: process.env.REACT_APP_MESSAGE_URL,
			method: 'GET',
			headers: headerList,
		};
		axios
			.request(reqOptions)
			.then(res => {
				setMessages(res.data.data);
			})
			.catch(error => {
				console.error(error);
				hasError(true);
				setErrorMessage(error);
			});
	};

	const getGuests = () => {
		let headerList = {
			Authorization: `Bearer ${token}`,
		};

		let reqOptions = {
			url: process.env.REACT_APP_GUEST_URL,
			method: 'GET',
			headers: headerList,
		};
		axios
			.request(reqOptions)
			.then(res => {
				setGuests(res.data.data);
			})
			.catch(error => {
				console.error(error);
				hasError(true);
				setErrorMessage(error);
			});
	};
	const logout = () => {
		localStorage.clear();
		setTimeout(() => {
			window.location.reload();
		}, 100);
	};

	return (
		<>
			{error ? (
				<Stack sx={{ width: '100%' }}>
					<Alert severity="error" className="error">
						{errorMessage.message}
					</Alert>
				</Stack>
			) : (
				<Container>
					<Button variant="contained" onClick={logout}>
						Log out
					</Button>
					<Card>
						<Typography variant="h6">Welcome {username}</Typography>
						<CardContent className={styles.cardsWrapper}>
							<Card>
								<CardHeader title="Rooms" />
								<CardContent className={styles.cards}>
									<Button variant="contained">Add Accommodation</Button>
									{rooms.map(room => (
										<Card key={room.id}>
											<CardHeader title={room.attributes.type.toUpperCase()} />
											<CardContent>
												<Typography variant="body2">
													Number of beds: {room.attributes.beds}
												</Typography>
											</CardContent>
										</Card>
									))}
								</CardContent>
							</Card>
							<Card>
								<CardHeader title="Messages" />
								<CardContent className={styles.cards}>
									{messages.map(message => (
										<Card key={message.id}>
											<CardHeader title={message.attributes.fullName} />
											<CardContent>
												<Typography variant="body1">
													{message.attributes.email}
												</Typography>
												<Typography variant="body2">
													{message.attributes.message}
												</Typography>
											</CardContent>
										</Card>
									))}
								</CardContent>
							</Card>
							<Card>
								<CardHeader title="Guests" />
								<CardContent className={styles.cards}>
									{guests.map(guest => (
										<Card key={guest.id}>
											<CardHeader title={guest.attributes.fullName} />
										</Card>
									))}
								</CardContent>
							</Card>
						</CardContent>
					</Card>
				</Container>
			)}
		</>
	);
};

export default Profile;
