import React, { useState } from "react";
import "../styles/Movie.css";

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
    image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham.",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

const trendingMovies = [
  {
    id: 4,
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    image: "https://image.tmdb.org/t/p/w500/5xeNPGbM8ImVdJACUoGpXT8Pxx3.jpg",
  },
];

const upcomingMovies = [
  {
    id: 6,
    title: "Deadpool 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Avatar 3",
    image: "https://via.placeholder.com/150",
  },
];

const reviews = [
  { user: "John Doe", comment: "Amazing movie experience!" },
  { user: "Jane Smith", comment: "Loved the seat booking system." },
];

const Movie = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const totalSeats = 36; // 6x6 grid
  const seatNumbers = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setSelectedSeats([]);
    setShowModal(true);
  };

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat) ? prevSeats.filter((s) => s !== seat) : [...prevSeats, seat]
    );
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
    setSelectedSeats([]);
  };

  const confirmBooking = () => {
    alert(`Booking Confirmed for ${selectedMovie.title}\nSeats: ${selectedSeats.join(", ")}`);
    closeModal();
  };

  return (
    <div className="movie-container">
      <h1 className="title">Movie Listings</h1>
      
      <section className="trending">
        <h2>Trending Movies</h2>
        <div className="trending-container">
          {trendingMovies.map((movie) => (
            <img key={movie.id} src={movie.image} alt={movie.title} className="trending-img" />
          ))}
        </div>
      </section>
      
      <section className="upcoming">
        <h2>Upcoming Movies</h2>
        <div className="upcoming-container">
          {upcomingMovies.map((movie) => (
            <img key={movie.id} src={movie.image} alt={movie.title} className="upcoming-img" />
          ))}
        </div>
      </section>

      <div className="grid-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-img" />
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-description">{movie.description}</p>
            <button className="book-button" onClick={() => openModal(movie)}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      <section className="reviews">
        <h2>User Reviews</h2>
        {reviews.map((review, index) => (
          <p key={index}><strong>{review.user}:</strong> {review.comment}</p>
        ))}
      </section>
      
      {showModal && selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <h2>Select Seats for {selectedMovie.title}</h2>
            <div className="seat-map">
              {seatNumbers.map((seat) => (
                <div
                  key={seat}
                  className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
                  onClick={() => toggleSeatSelection(seat)}
                >
                  {seat}
                </div>
              ))}
            </div>
            <button className="book-button" onClick={confirmBooking} disabled={selectedSeats.length === 0}>
              Confirm Booking
            </button>
            <button className="close-button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
