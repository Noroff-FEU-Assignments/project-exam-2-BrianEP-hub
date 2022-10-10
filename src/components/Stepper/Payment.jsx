import React, { useState } from 'react';
import {
	Container,
	Paper,
	Typography,
	Stepper,
	Step,
	StepLabel,
} from '@mui/material';

const steps = ['order-info', 'order-details', 'order-confirmation'];

const Payment = () => {
	const [checkoutStep, setCheckoutStep] = useState();

	return (
		<div className="checkout">
			<Container>
				<Paper elevation={3}>
					<Typography align="center" variant="h5" gutterBottom>
						Checkout
					</Typography>
					{checkoutStep !== 'confirmation' && (
						<Stepper activeStep={steps.indexOf(checkoutStep)}>
							{steps.map(label => (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
					)}
				</Paper>
			</Container>
		</div>
	);
};

export default Payment;
