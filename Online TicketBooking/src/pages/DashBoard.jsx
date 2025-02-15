import React from "react";
import { Link } from "react-router-dom";
import "../styles/DashBoard.css";

const sections = [
  // Online Ticket Booking
  { name: "Bus", image: "/assets/BusLogo.jpg", path: "assets/busLogo", category: "ticketing" },
  { name: "Train", image: "/assets/train.jpg", path: "/train", category: "ticketing" },
  { name: "Flight", image: "/assets/flight.jpg", path: "/flight", category: "ticketing" },
  { name: "Cab", image: "/assets/cab.jpg", path: "/cab", category: "ticketing" },

  // Movies & Entertainment
  { name: "Movie", image: "/assets/movie.jpg", path: "/movie", category: "movies" },
  { name: "Events", image: "/assets/events.jpg", path: "/events", category: "movies" },
  { name: "Theme Parks", image: "/assets/themepark.jpg", path: "/themeparks", category: "movies" },

  // Tourism & Travel
  { name: "Hotel", image: "/assets/hotel.jpg", path: "/hotel", category: "tourism" },
  { name: "Adventure Sports", image: "/assets/adventure.jpg", path: "/adventure", category: "tourism" },
  { name: "Cruise", image: "/assets/cruise.jpg", path: "/cruise", category: "tourism" },
  { name: "Bike Rentals", image: "/assets/bike.jpg", path: "/bike-rentals", category: "tourism" },

  // Customer Add-ons
  { name: "Loyalty Program", image: "/assets/loyalty.jpg", path: "/loyalty", category: "addons" },
  { name: "Gift Cards", image: "/assets/giftcards.jpg", path: "/gift-cards", category: "addons" },
  { name: "Customer Support", image: "/assets/support.jpg", path: "/support", category: "addons" },
  { name: "Travel Insurance", image: "/assets/insurance.jpg", path: "/insurance", category: "addons" },
];

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      {/* CTA Banner */}
      <div className="cta-banner">
        <h2>Welcome to Online Ticket Booking</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis est eaque repellendus doloribus optio.<br></br> Officiis harum esse quam dolorum expedita blanditiis assumenda nisi ipsum velit, dolore, omnis doloribus aperiam optio.</p>
        <p>Book your tickets hassle-free and explore your destinations!</p>
        <button className="cta-button">Book Now</button>
      </div>

      {/* Sections */}
      <div className="sections-wrapper">
        {/* Online Ticket Booking */}
        <div className="section-category ticketing">
          <h2>Online Ticket Booking</h2>
          
          <div className="sections-container">
            {sections.filter(s => s.category === "ticketing").map((section, index) => (
              <Link to={section.path} key={index} className="section-card">
                <img src={section.image} alt={section.name} className="section-image" />
                <h3>{section.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Movies & Entertainment */}
        <div className="section-category movies">
          <h2>Movies & Entertainment</h2>
          <div className="sections-container">
            {sections.filter(s => s.category === "movies").map((section, index) => (
              <Link to={section.path} key={index} className="section-card">
                <img src={section.image} alt={section.name} className="section-image" />
                <h3>{section.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Tourism & Travel */}
        <div className="section-category tourism">
          <h2>Tourism & Travel</h2>
          <div className="sections-container">
            {sections.filter(s => s.category === "tourism").map((section, index) => (
              <Link to={section.path} key={index} className="section-card">
                <img src={section.image} alt={section.name} className="section-image" />
                <h3>{section.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Customer Add-ons */}
        <div className="section-category addons">
          <h2>Customer Add-ons</h2>
          <div className="sections-container">
            {sections.filter(s => s.category === "addons").map((section, index) => (
              <Link to={section.path} key={index} className="section-card">
                <img src={section.image} alt={section.name} className="section-image" />
                <h3>{section.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="full-width-section">
  <div>
    <h2>Explore the World with Easy Bookings</h2>
    <p>Find the best deals on travel, hotels, and adventure experiences in one place.</p>
  </div>
</div>

    </div>
  );
};

export default DashBoard;
