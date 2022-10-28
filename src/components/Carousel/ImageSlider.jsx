import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from './carousel.module.scss';

/* const items = [
	{
		name: 'Randoman #1',
		description: 'The randomest man in the universe',
	},
	{
		name: 'Randoman #2',
		description: 'Even more random than the first one!',
	},
]; */

const ImageSlider = ({image, text}) => {
	useEffect(() => {
		getHero();
	}, [image, text]);

	const [hero, setHero] = useState([]);
	const [img, setImg] = useState('')

	const getHero = async () => {
		const options = {
			method: 'GET',
			headers: {
				Accept: '*/*',
				'Content-type': 'application/json',
			},
		};
		try {
			const resp = await fetch(
				`${process.env.REACT_APP_HERO_URL}?populate=*`,
				options,
			);
			const data = await resp.json();

			setHero(data.data);
			console.log(data.data);
			setImg(data.data.attributes.hero_banner.data.attributes.formats.small.url)
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Carousel
			className={styles.carousel}
			NextIcon={<ChevronRightIcon />}
			PrevIcon={<ChevronLeftIcon />}
		>
			<Paper className={styles.paper}>
				<img
					src={`${process.env.REACT_APP_API_BASE_URL}${img}`}
					alt={text}
				/>
			</Paper>
		</Carousel>
	);
};

export default ImageSlider;


