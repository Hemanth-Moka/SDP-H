import React, { useState } from "react";
import "../styles/Sports.css"; // Adjust path based on location




const sportsCategories = [
  {
    sport: "Football",
    image: "/assets/41.jpg",
    venues: [
      {
        name: "Stadium A",
        sections: [
          { name: "VIP", rows: 2, cols: 5 },
          { name: "Premium", rows: 3, cols: 6 },
        ],
      },
    ],
  },
  {
    sport: "Basketball",
    image: "/assets/basketball.jpg",
    venues: [
      {
        name: "Arena B",
        sections: [
          { name: "Courtside", rows: 2, cols: 4 },
          { name: "Lower Bowl", rows: 3, cols: 5 },
        ],
      },
    ],
  },
  {
    sport: "Cricket",
    image: "/assets/cricket.jpg",
    venues: [
      {
        name: "Cricket Ground",
        sections: [
          { name: "Pavilion", rows: 2, cols: 5 },
          { name: "Grandstand", rows: 3, cols: 6 },
        ],
      },
    ],
  },
  {
    sport: "Tennis",
    image: "/assets/tennis.jpg",
    venues: [
      {
        name: "Tennis Court",
        sections: [
          { name: "VIP", rows: 2, cols: 3 },
          { name: "General", rows: 3, cols: 4 },
        ],
      },
    ],
  },
  {
    sport: "Baseball",
    image: "/assets/baseball.jpg",
    venues: [
      {
        name: "Baseball Park",
        sections: [
          { name: "VIP", rows: 2, cols: 5 },
          { name: "General", rows: 3, cols: 6 },
        ],
      },
    ],
  },
];

export default function SportsBooking() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [activeSport, setActiveSport] = useState(null);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((seat) => seat !== seatId) : [...prev, seatId]
    );
  };

  return (
    <div className="sports-container">
      <h1>Sports Ticket Booking</h1>

      <div className="sports-cards">
        {sportsCategories.map(({ sport, image }) => (
          <div key={sport} className="sport-card" onClick={() => setActiveSport(sport)}>
            <img src={image} alt={sport} />
            <h3>{sport}</h3>
          </div>
        ))}
      </div>

      {sportsCategories
        .filter(({ sport }) => sport === activeSport)
        .map(({ sport, venues }) => (
          <div key={sport} className="venue-details active">
            {venues.map(({ name, sections }) => (
              <div key={name} className="venue-card">
                <h3>{name}</h3>
                {sections.map(({ name: sectionName, rows, cols }) => (
                  <div key={sectionName} className="section-card">
                    <h4>{sectionName} Section</h4>
                    <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 40px)` }}>
                      {Array.from({ length: rows * cols }).map((_, index) => {
                        const seatId = `${sport}-${name}-${sectionName}-${index}`;
                        return (
                          <button
                            key={seatId}
                            onClick={() => toggleSeat(seatId)}
                            className={selectedSeats.includes(seatId) ? "selected" : ""}
                          >
                            {index + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}

      <button className="checkout-button" disabled={selectedSeats.length === 0}>
        Checkout ({selectedSeats.length} Seats)
      </button>
    </div>
  );
}
