// src/components/movie-card/MovieCard.jsx
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Button, Card } from "react-bootstrap"; // Import Bootstrap
import { Link } from "react-router";
import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100 w-100">
      <Card.Img variant="top" className="img-fluid" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        <Link to={`/movie/${encodeURIComponent(movie.id)}`} className="me-2">
          <Button variant="primary">See more</Button>
        </Link>
        <Link to={`#`}>
          <Button variant="secondary">Favorite</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

// Define PropTypes for MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired, // Movie title
    description: PropTypes.string.isRequired, // Movie description 
    genre: PropTypes.string.isRequired, // Genre name 
    director: PropTypes.string.isRequired, // Director's name 
    image: PropTypes.string.isRequired,// Image URL 
  }).isRequired
};