import React from 'react';
import { Footer, Navbar, Payment } from './components';
import { Home, Admin, Rooms, Contact } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import './App.scss';

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Container className=".container">
					<Routes>
						<Route index element={<Home />} />
						<Route path="/admin" element={<Admin />} />
						<Route path="/rooms" element={<Rooms />} />
						<Route path="/contact" element={<Contact />} />
						<Route exact path="/checkout" element={<Payment />} />
					</Routes>
				</Container>
			</Router>
			<Footer />
		</>
	);
};

export default App;
