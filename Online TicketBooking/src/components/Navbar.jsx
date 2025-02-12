import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the Left */}
        <Link to="/" className="logo">Online Ticket Booking</Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">
              <img src="/assets/home-icon.png" alt="Home" className="nav-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/travel">
              <img src="/assets/travel-icon.png" alt="Travel" className="nav-icon" />
              Travel
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <img src="/assets/movies-icon.png" alt="Movies" className="nav-icon" />
              Movies
            </Link>
          </li>
          <li>
            <Link to="/sports">
              <img src="/assets/sports-icon.png" alt="Sports" className="nav-icon" />
              Sports
            </Link>
          </li>
          <li>
            <Link to="/flights">
              <img src="/assets/flights-icon.png" alt="Flights" className="nav-icon" />
              Flights
            </Link>
          </li>
          <li>
            <Link to="/events">
              <img src="/assets/events-icon.png" alt="Events" className="nav-icon" />
              Events
            </Link>
          </li>
          <li>
            <Link to="/hotels">
              <img src="/assets/hotels-icon.png" alt="Hotels" className="nav-icon" />
              Hotels
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <img src="/assets/contact-icon.png" alt="Contact" className="nav-icon" />
              Contact
            </Link>
          </li>
        </ul>

        {/* User Profile Menu */}
        <div className="user-menu">
          <button className="user-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <FaUser />
          </button>

          {dropdownOpen && (
            <div className="dropdown">
              <Link to="/profile">Profile</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
