// src/components/movie-view/MovieView.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './MovieView.scss';

export const MovieView = ({ movie, onBackClick }) => {
  if (!movie) {
    return <div>No movie data available.</div>;
  }

  return (
    <div className="movie-view">
      <h2 className="movie-view__title">{movie.Title}</h2>
      <p className="movie-view__description">{movie.Description}</p>
      <p className="movie-view__genre"><strong>Genre:</strong> {movie.Genre.Name}</p>
      <p className="movie-view__director"><strong>Director:</strong> {movie.Director.Name}</p>
      {movie.ImagePath ? (
        <img
          className="movie-view__image"
          src={movie.ImagePath}
          alt={`Poster of ${movie.Title}`}
        />
      ) : (
        <p>No image available.</p>
      )}
      <button className="movie-view__back-button" onClick={onBackClick}>Back</button>
    </div>
  );
};

// Define PropTypes for MovieView
MovieView.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Movie ID from the API
    Title: PropTypes.string.isRequired, // Movie title
    Description: PropTypes.string, // Movie description
    Genre: PropTypes.shape({
      Name: PropTypes.string, // Genre name
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string, // Director's name
    }),
    ImagePath: PropTypes.string, // Path or URL to the movie image
  }).isRequired,
  onBackClick: PropTypes.func.isRequired, // Function to handle back button click
};

