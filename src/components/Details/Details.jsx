import {
	Card,
	CardHeader,
	CardContent,
	Container,
	Modal,
	Typography,
	Box,
} from '@mui/material';
import React from 'react';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '1px solid #000',
	boxShadow: 24,
	p: 4,
};

const Details = ({ open, onClose }) => {
	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={style}>
				<Typography variant="h6">This is the details modal</Typography>
			</Box>
		</Modal>
	);
};

export default Details;
