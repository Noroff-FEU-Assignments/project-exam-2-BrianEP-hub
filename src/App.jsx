import React from 'react';
import { Footer, Navbar } from './components';
import { Home, Admin, Rooms, Contact } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/rooms" element={<Rooms />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
			<Footer />
		</>
	);
};

export default App;
