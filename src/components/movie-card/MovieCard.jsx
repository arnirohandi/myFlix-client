// src/components/movie-card/MovieCard.jsx
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div className="movie-card" onClick={() => onMovieClick(movie)}>
      {/* Render the movie's title */}
      <h3>{movie.title}</h3>

      {/* Render the movie's image if available */}
      {movie.ImagePath && <img src={movie.ImagePath} alt={`${movie.title} poster`} />}

      {/* Render the genre and director if available */}
      <p>{movie.genre?.name ? `Genre: ${movie.genre.name}` : "Genre: Unknown"}</p>
      <p>{movie.director?.name ? `Director: ${movie.director.name}` : "Director: Unknown"}</p>
    </div>
  );
};

// Define PropTypes for MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Unique identifier for each movie
    title: PropTypes.string.isRequired, // Movie title
    description: PropTypes.string, // Movie description (optional)
    genre: PropTypes.shape({
      name: PropTypes.string, // Genre name (e.g., "Sci-Fi") (optional)
    }),
    director: PropTypes.shape({
      name: PropTypes.string, // Director's name (optional)
    }),
    ImagePath: PropTypes.string, // Image URL or path (optional)
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired, // Required callback function for click events
};


