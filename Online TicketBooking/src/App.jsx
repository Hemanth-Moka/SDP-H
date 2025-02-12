import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Movietickets from './pages/Movietickets';
import Buses from './transport/Buses';
import Cabs from './transport/Cabs';
import Flights from "./transport/Flights";
import Hotels from './accomdation/Hotels';
import HotelCheckin from './accomdation/HotelCheckin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/movies" element={<Movietickets />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="transport/flights" element={<Flights />} />  {/* Only one flights route */}
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel-checkin" element={<HotelCheckin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
