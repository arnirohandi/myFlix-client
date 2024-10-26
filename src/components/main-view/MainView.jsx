// src/components/main-view/MainView.jsx
import React, { useState } from "react";
import { MovieCard } from "../movie-card/MovieCard";
import { MovieView } from "../movie-view/MovieView";

export const MainView = () => {
  // Mock data for movies
  const [movies] = useState ([
    { id: 1, 
      title: 'Inception', 
      description: 'A mind-bending thriller', 
      genre: 'Sci-Fi', 
      director: 'Christopher Nolan', 
      image: 'inception.jpg' 
    },
    { id: 2, 
      title: 'The Matrix', 
      description: 'A dystopian future reality', 
      genre: 'Sci-Fi', 
      director: 'The Wachowskis', 
      image: 'matrix.jpg' 
    },
    { id: 3, 
      title: 'Interstellar', 
      description: 'A journey through space and time', 
      genre: 'Sci-Fi', 
      director: 'Christopher Nolan', 
      image: 'interstellar.jpg' },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  // Show MovieView if a movie is selected
  if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick={handleBackClick} />;
  }

  // Handle empty movie list
  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }
  
  // Render the main view with MovieCards
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard 
          key={movie.id} 
          movie={movie} 
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
      </div>
    );
  };


