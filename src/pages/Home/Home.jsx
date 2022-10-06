import { Typography } from '@mui/material';
import React from 'react';
import { ImageSlider } from '../../components';

const Home = () => {
	return (
		<>
			<div>
				<ImageSlider />
			</div>
			<div>
				<Typography variant="h4">
					This is the header of the home page
				</Typography>
			</div>
		</>
	);
};

export default Home;
