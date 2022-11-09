import React from 'react';
import { Footer, Navbar, Payment, Register, Details } from './components';
import { Home, Profile, Rooms, Contact } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import './App.scss';

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Container className="container">
					<Routes>
						<Route index element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/rooms" element={<Rooms />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/register" element={<Register />} />
						<Route path="/rooms/:id" element={<Details />} />
						<Route exact path="/checkout" element={<Payment />} />
					</Routes>
				</Container>
			</Router>
			<Footer />
		</>
	);
};

export default App;
