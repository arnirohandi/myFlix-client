// src/components/movie-view/MovieView.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export const MovieView = ({ movie, onBackClick }) => {
  if (!movie) {
    return <div>No movie data available.</div>;
  }

  return (
    <div className="movie-view">
      <h2 className="movie-view__title">{movie.title}</h2>
      <p className="movie-view__description">{movie.description}</p>
      <p className="movie-view__genre">Genre: {movie.genre.name}</p>
      <p className="movie-view__director">Director: {movie.director.name}</p>
      {movie.ImagePath ? (
        <img
          className="movie-view__image"
          src={movie.ImagePath}
          alt={`Poster of ${movie.title}`}
        />
      ) : (
        <p>No image available.</p>
      )}
      <button
        className="movie-view__back-button"
        onClick={onBackClick}
        style={{ cursor: "pointer" }}
      >
        Back
      </button>
    </div>
  );
};

// Define PropTypes for MovieView
MovieView.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Movie ID from the API
    title: PropTypes.string.isRequired, // Movie title
    description: PropTypes.string, // Movie description
    genre: PropTypes.shape({
      name: PropTypes.string, // Genre name
    }),
    director: PropTypes.shape({
      name: PropTypes.string, // Director's name
    }),
    ImagePath: PropTypes.string, // Path or URL to the movie image
  }).isRequired,
  onBackClick: PropTypes.func.isRequired, // Function to handle back button click
};

