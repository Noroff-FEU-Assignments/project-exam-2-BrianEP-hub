import React from 'react';
import { Navbar } from './components';
import { Home, Admin, Rooms, Contact } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route index path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
