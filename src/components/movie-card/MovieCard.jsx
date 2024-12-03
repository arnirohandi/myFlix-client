// src/components/movie-card/MovieCard.jsx
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import axios from "axios"; // Import Axios
import { Button, Card } from "react-bootstrap"; // Import Bootstrap
import { Link } from "react-router";
import "./movie-card.scss";

export const MovieCard = ({ movie, userId, token, onFavoriteAdded }) => {
  // Function to handle adding to favorites
  const handleAddToFavorites = async () => {
    try {
      const response = await axios.post(
        `https://myflix-api-app-ff32afce7dc8.herokuapp.com/users/${userId}/movies/${movie.id}`,
        {}, // API expects a body; send an empty object if none is needed
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token for authentication
          },
        }
      );

      // Optionally, trigger a callback if passed
      if (onFavoriteAdded) onFavoriteAdded(movie);

      alert("Movie added to favorites!"); // Notify the user
    } catch (error) {
      console.error("Error adding movie to favorites:", error);
      alert("Failed to add movie to favorites. Please try again.");
    }
  };

  return (
    <Card className="h-100 w-100">
      <Card.Img variant="top" className="img-fluid" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        <Link to={`/movie/${encodeURIComponent(movie.id)}`} className="me-2">
          <Button variant="primary">See more</Button>
        </Link>
        <Button variant="secondary" onClick={handleAddToFavorites}>
          Favorite
        </Button>
      </Card.Body>
    </Card>
  );
};

// export const MovieCard = ({ movie }) => {
//   return (
//     <Card className="h-100 w-100">
//       <Card.Img variant="top" className="img-fluid" src={movie.image} />
//       <Card.Body>
//         <Card.Title>{movie.title}</Card.Title>
//         <Card.Text>{movie.director}</Card.Text>
//         <Link to={`/movie/${encodeURIComponent(movie.id)}`} className="me-2">
//           <Button variant="primary">See more</Button>
//         </Link>
//         <Link to={`#`}>
//           <Button variant="secondary">Favorite</Button>
//         </Link>
//       </Card.Body>
//     </Card>
//   );
// };

// Define PropTypes for MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired, // Movie ID
    title: PropTypes.string.isRequired, // Movie title
    description: PropTypes.string.isRequired, // Movie description
    genre: PropTypes.string.isRequired, // Genre name
    director: PropTypes.string.isRequired, // Director's name
    image: PropTypes.string.isRequired, // Image URL
  }).isRequired,
  userId: PropTypes.string.isRequired, // User ID
  token: PropTypes.string.isRequired, // Authorization token
  onFavoriteAdded: PropTypes.func, // Callback function when a movie is favorited
};

// // Define PropTypes for MovieCard
// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired, // Movie title
//     description: PropTypes.string.isRequired, // Movie description 
//     genre: PropTypes.string.isRequired, // Genre name 
//     director: PropTypes.string.isRequired, // Director's name 
//     image: PropTypes.string.isRequired,// Image URL 
//   }).isRequired
// };