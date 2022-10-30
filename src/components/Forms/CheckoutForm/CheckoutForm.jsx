import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const CheckoutForm = ({
	guest = {},
	handleNextStep,
	handlePrevStep,
	handleSubmit,
	handleChange,
}) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="full-name"
							name="fullName"
							label="Full name"
							value={guest.fullName}
							onChange={handleChange}
						/>
					</Grid>
				</Grid>
				<div className="actions">
					<Button
						size="medium"
						to="/rooms"
						component={Link}
						variant="contained"
					>
						Go Back
					</Button>
					<Button
						type="submit"
						size="medium"
						color="secondary"
						variant="contained"
					>
						Next
					</Button>
				</div>
			</form>
		</>
	);
};

export default CheckoutForm;
