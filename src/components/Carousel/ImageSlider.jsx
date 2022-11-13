import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import axios from 'axios';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from './carousel.module.scss';

const ImageSlider = () => {
	useEffect(() => {
		getHero();
	}, []);

	const [heroes, setHeroes] = useState([]);

	const getHero = () => {
		axios.get(`${process.env.REACT_APP_HERO_URL}?populate=*`).then(res => {
			setHeroes(res.data.data);
		});
	};

	return (
		<Carousel
			className={styles.carousel}
			NextIcon={<ChevronRightIcon />}
			PrevIcon={<ChevronLeftIcon />}
		>
			{heroes.map(hero => (
			<Paper className={styles.paper} key={hero.id}>
				<img
					src={`${hero.attributes.hero_banner.data.attributes.url}`}
					alt={hero.attributes.hero_banner_alt_text}
				/>
			</Paper>
			))}
		</Carousel>
	);
};

export default ImageSlider;
