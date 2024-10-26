// src/components/movie-view/MovieView.jsx
import React from 'react';
import './MovieView.scss';

export const MovieView = ({ movie, onBackClick }) => {
  if (!movie) {
    return <div>No movie data available.</div>;
  }

  return (
    <div className="movie-view">
      <h2 className="{movie-view__title">{movie.title}</h2>
      <p className="movie-view__description">{movie.description}</p>
      <p className="movie-view__genre"><strong>Genre:</strong> {movie.genre}</p>
      <p className="movie-view__director"><strong>Director:</strong> {movie.director}</p>
      {movie.image ? (
        <img
          className="movie-view__image"
          src={movie.image}
          alt={`Poster of ${movie.title}`}
        />
      ) : (
        <p>No image available.</p>
      )}
      <button className="movie-view__back-button" onClick={onBackClick}>Back</button>
    </div>
  );
};