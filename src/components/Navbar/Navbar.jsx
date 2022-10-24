import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Button, Modal, Toolbar, Typography } from '@mui/material';
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

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '|px solid #000',
	boxShadow: 24,
	p: 4,
};

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const loginModal = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
						<Box>
							<Button color="inherit" onClick={loginModal} variant="outlined">
								Login
							</Button>
						</Box>
						<Modal open={open} onClose={handleClose}>
							<Box sx={style}>
								<LoginForm />
							</Box>
						</Modal>
					</Toolbar>
				</Box>
			</AppBar>
		</>
	);
};

export default Navbar;
