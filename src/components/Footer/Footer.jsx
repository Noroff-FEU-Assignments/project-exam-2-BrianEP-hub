import React from 'react';
import { BottomNavigation, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './Footer.module.scss';

const Footer = () => {
	const date = new Date();
	const fullYear = date.getFullYear();
	return (
		<BottomNavigation sx={{ flexGrow: 1 }} className={styles.footer}>
			<div className={styles.links}>
				<Typography variant="h6">Terms and conditions</Typography>
				<Typography variant="h6">Frequently asked questions</Typography>
			</div>
			<div className={styles.copy}>
				<Typography variant="h6">Lorem ipsum dolor sit amet</Typography>
				<Typography variant="h6">
					Copyright Brian B &copy; {fullYear}
				</Typography>
			</div>
			<div className={styles.socials}>
				<FacebookOutlinedIcon />
				<TwitterIcon />
				<InstagramIcon />
			</div>
		</BottomNavigation>
	);
};

export default Footer;
