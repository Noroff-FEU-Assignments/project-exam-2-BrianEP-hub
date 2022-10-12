import React from 'react';
import { Button } from '@mui/material';

const PaymentForm = ({ handleNextStep, handlePrevStep }) => {
	return (
		<>
			<div className="actions">
				<Button
					size="medium"
					onClick={e => handlePrevStep(e, 'details')}
					variant="contained"
				>
					Go Back
				</Button>
				<Button
					onClick={e => handleNextStep(e, 'payment')}
					size="medium"
					color="secondary"
					variant="contained"
				>
					Next
				</Button>
			</div>
		</>
	);
};

export default PaymentForm;
