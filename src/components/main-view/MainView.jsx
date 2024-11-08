// src/components/main-view/MainView.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MovieCard } from "../movie-card/MovieCard";
import { MovieView } from "../movie-view/MovieView";

export const MainView = () => {
  // Initialize movies with an empty array
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from the API when the component mounts
  useEffect(() => {
    fetch("https://myflix-api-app-ff32afce7dc8.herokuapp.com/movies")
    .then((response) => response.json())
    .then((data) => {
      setMovies(data);
    })
    .catch((error) => {
      console.log("Error fetching movies:", error);
    });
  },[]);

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
          key={movie._id} 
          movie={movie} 
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
      </div>
    );
  };

  // Add PropTypes for MainView 
  MainView.propTypes = {};

