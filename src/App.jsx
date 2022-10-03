import React from 'react';
import { Footer, Navbar } from './components';
import { Home, Admin, Rooms, Contact } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Container maxWidth="lg">
					<Routes>
						<Route index element={<Home />} />
						<Route path="/admin" element={<Admin />} />
						<Route path="/rooms" element={<Rooms />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Container>
			</Router>
			<Footer />
		</>
	);
};

export default App;
