import React, { useEffect, useState} from 'react';
import { CircularProgress, Container, Typography } from '@mui/material';
import { ImageSlider } from '../../components';
import axios from 'axios';

import styles from './home.module.scss';

const Home = () => {
	useEffect(() => {
		getInfo();
	}, []);
	const [info, setInfo] = useState('');
	const [loading, isLoading] = useState(true);


	const getInfo = () => {
		axios
			.get(`${process.env.REACT_APP_API_BASE_URL}/api/home-info`)
			.then(res => {
				setInfo(res.data.data);
				isLoading(false);
			})
			.catch(error => console.error(error));
	};

	return (
		<>
			<div>
				<ImageSlider />
			</div>
			<div>
				{loading ? 
					<CircularProgress /> 
				: 
				<Container>
					<Typography className={styles.header}>
						{info.attributes.header}
					</Typography>
					<Typography>
						{info.attributes.description}
					</Typography>
				</Container>
				}
			</div>
		</>
	);
};

export default Home;
