// src/components/movie-card/MovieCard.jsx
import React from 'react';
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

