import React from 'react';
import { Grid, Typography } from '@mui/material';
import { ContactForm } from '../../components/Forms';

const Contact = () => {
	return (
		<>
			<Grid container spacing={1}>
				<Grid item>
					<ContactForm />
				</Grid>
				<Grid item>
					<Typography variant="h5">Contact us</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default Contact;
