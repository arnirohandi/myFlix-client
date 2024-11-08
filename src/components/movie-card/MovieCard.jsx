// src/components/movie-card/MovieCard.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '..movie-card/MovieCard.scss';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
   <div
     className="movie-card"
     onClick={() => onMovieClick(movie)}
    >
      <h3>{movie.title}</h3> 
    </div>
  );
};

// Define PropTypes for MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired, // The unique identifier for each movie from the API
    Title: PropTypes.string.isRequired, // The title of the movie
    Description: PropTypes.string, // Optional, if you plan to use it elsewhere
    Genre: PropTypes.shape({
      Name: PropTypes.string, // Genre name (e.g., "Sci-Fi")
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string, // Director's name
    }),
    ImagePath: PropTypes.string, // Image path or URL
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired, // onMovieClick is required and should be a function
};

