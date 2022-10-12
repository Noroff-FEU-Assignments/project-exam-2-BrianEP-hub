import React, { useState } from 'react';
import {
	Container,
	Paper,
	Typography,
	Stepper,
	Step,
	StepLabel,
} from '@mui/material';
import { renderRelatedComponent } from './helpers';
import styles from './payment.module.scss';

const steps = ['details', 'payment', 'confirmation'];

const Payment = () => {
	const [checkoutStep, setCheckoutStep] = useState('details');
	// const [bookingStep, setBookingStep] = useState('details');

	const handleNextStep = (e, step) => {
		e.preventDefault();
		setCheckoutStep(step);
	};
	const handlePrevStep = (e, step) => {
		e.preventDefault();
		setCheckoutStep(step);
	};

	return (
		<div className={styles.checkout}>
			<Container>
				<Paper elevation={3} className={styles.paper}>
					<Typography align="center" variant="h5" gutterBottom>
						Checkout
					</Typography>
					{checkoutStep !== 'confirmation' && (
						<Stepper
							activeStep={steps.indexOf(checkoutStep)}
							className={styles.stepper}
						>
							{steps.map(label => (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
					)}
					{renderRelatedComponent(checkoutStep, handleNextStep, handlePrevStep)}
				</Paper>
			</Container>
		</div>
	);
};

export default Payment;
