import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">Book N Ride</Link>

        <ul className="nav-links">
          <li>
            <Link to="/">
              <img src="/assets/home-icon.png" alt="Home" className="nav-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/travel">
              <img src="/assets/navbar/Flights.jpg" alt="Travel" className="nav-icon" />
              Travel
            </Link>
          </li>
          <li>
            <Link to="/login">
              <img src="/assets/navbar/Login.jpg" alt="Login" className="nav-icon" />
              Login
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <img src="/assets/navbar/Movie.jpg" alt="Movies" className="nav-icon" />
              Movies
            </Link>
          </li>
          <li>
            <Link to="/sports">
              <img src="/assets/navbar/Sports.jpg" alt="Sports" className="nav-icon" />
              Sports
            </Link>
          </li>
          <li>
            <Link to="/flights">
              <img src="/assets/navbar/Flights.jpg" alt="Flights" className="nav-icon" />
              Flights
            </Link>
          </li>
          <li>
            <Link to="/events">
              <img src="/assets/navbar/Events.jpg" alt="Events" className="nav-icon" />
              Events
            </Link>
          </li>
          <li>
            <Link to="/hotels">
              <img src="/assets/navbar/Hotel.jpg" alt="Hotels" className="nav-icon" />
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
