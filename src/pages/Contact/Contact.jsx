import React, { useState } from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	CircularProgress,
	Grid,
	Typography,
} from '@mui/material';
import { ContactForm } from '../../components/Forms';
import { useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
	useEffect(() => {
		getInfo();
	}, []);
	const [info, setInfo] = useState('');
	const [loading, isLoading] = useState(true);

	const getInfo = () => {
		axios
			.get(`${process.env.REACT_APP_API_BASE_URL}/api/contact-info`)
			.then(res => {
				setInfo(res.data.data);
				isLoading(false);
			})
			.catch(error => console.error(error));
	};

	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs={8}>
					<Card>
						<CardContent>
							<Typography variant="h5">Contact form</Typography>
							<ContactForm />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4}>
					{loading ? (
						<CircularProgress />
					) : (
						<Card>
							<CardHeader title={'Contact us'} />
							<CardContent>
								<Typography variant="h6">{info.attributes.company}</Typography>
								<Typography variant="h6">
									{info.attributes.streetname}
								</Typography>
								<Typography
									variant="body2"
									dangerouslySetInnerHTML={{
										__html: info.attributes.contactInfo,
									}}
								/>
							</CardContent>
						</Card>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default Contact;
