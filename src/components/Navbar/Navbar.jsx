import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import LoginForm from '../Forms/LoginForm/LoginForm';
import styles from './Navbar.module.scss';

const pages = [
	{
		name: 'home',
		link: '/',
	},
	{
		name: 'rooms',
		link: '/rooms',
	},
	{
		name: 'contact',
		link: '/contact',
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const loginModal = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const getUsername = localStorage.getItem('user');

	return (
		<>
			<AppBar position="static" className={styles.navBar}>
				<Box sx={{ flexGrow: 1 }}>
					<Toolbar>
						<Box className={styles.links}>
							{pages.map(page => (
								<Typography variant="h6" component="div" key={page.name}>
									<NavLink to={page.link} className={styles.navLink}>
										{page.name}
									</NavLink>
								</Typography>
							))}
						</Box>
						{!getUsername ? (
							<Box>
								<Button color="inherit" onClick={loginModal} variant="outlined">
									Login
								</Button>
							</Box>
						) : (
							<Box>
								<Typography variant="h6" component="div">
									<NavLink to="/profile" className={styles.navLink}>
										{getUsername}
									</NavLink>
								</Typography>
							</Box>
						)}
						<LoginForm open={open} onClose={handleClose} />
					</Toolbar>
				</Box>
			</AppBar>
		</>
	);
};

export default Navbar;
