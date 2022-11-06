import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { ContactForm } from '../../components/Forms';

const Contact = () => {
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
					<Card>
						<CardContent>
							<Typography variant="h5">Contact us</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default Contact;
