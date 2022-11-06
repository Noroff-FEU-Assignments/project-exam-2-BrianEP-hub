import { Typography } from '@mui/material';
import React from 'react';
import { ImageSlider } from '../../components';

import styles from './home.module.scss';

const Home = () => {
	return (
		<>
			<div>
				<ImageSlider />
			</div>
			<div>
				<Typography className={styles.header}>
					This is the header of the home page
				</Typography>
			</div>
		</>
	);
};

export default Home;
