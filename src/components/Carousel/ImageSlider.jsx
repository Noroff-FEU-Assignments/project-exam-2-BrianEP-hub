import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from './carousel.module.scss';

const items = [
	{
		name: 'Randoman #1',
		description: 'The randomest man in the universe',
	},
	{
		name: 'Randoman #2',
		description: 'Even more random than the first one!',
	},
];

const ImageSlider = () => {
	return (
		<Carousel
			className={styles.carousel}
			NextIcon={<ChevronRightIcon />}
			PrevIcon={<ChevronLeftIcon />}
		>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
};

export default ImageSlider;

const Item = props => {
	return (
		<Paper className={styles.paper}>
			<h2>{props.item.name}</h2>
			<p>{props.item.description}</p>
		</Paper>
	);
};
