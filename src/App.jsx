import React from 'react';
import { Navbar } from './components';
import { Home, Admin, Rooms } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
