import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import { Button, Form, ListGroup } from "react-bootstrap";
import { MovieCard } from "../movie-card/MovieCard";
import "./profile-view.scss";

export const ProfileView = ({ profile, onLogout, onUpdateUser, onFavoriteToggle }) => {
  // console.log(profile);
  const [user, setUsername] = useState(profile.user); // ok
  const [email, setEmail] = useState(profile.email); // This needs to be pulled from /users endpoint
  const [dob, setDob] = useState(profile.dateofbirth); // This needs to be pulled from /users endpoint
  const [favoriteMovies, setFavoriteMovies] = useState([]); // This needs to be pulled from /users endpoint
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch the user's favorite movies from the API
    const fetchFavoriteMovies = async () => {
      try {
        const userResponse = await axios.get(
          `https://myflix-api-app-ff32afce7dc8.herokuapp.com/users/${profile.user}`,
          {
            headers: {
              Authorization: `Bearer ${profile.token}`, // Include the token in the Authorization header
            },
          }
        );
        const favoriteMovieIds = userResponse.data.FavoriteMovies;
        // console.log(favoriteMovieIds);

        // Fetch all movies
        const moviesResponse = await fetch(
          "https://myflix-api-app-ff32afce7dc8.herokuapp.com/movies"
        );

        const moviesData = await moviesResponse.json();

        // Transform movies data
        const moviesFromApi = moviesData.map((movie) => ({
          id: movie._id,
          title: movie.title,
          image: movie.image_url,
          director: movie.director?.name,
          description: movie.description,
          genre: movie.genre?.name,
        }));

        setMovies(moviesFromApi);
        //console.log(moviesFromApi);
        
        // Filter the favorite movies based on the fetched movies
        const favoriteMoviesData = moviesFromApi.filter((movie) =>
          favoriteMovieIds.includes(movie.id)
        );
        // console.log(favoriteMoviesData);

        setFavoriteMovies(favoriteMoviesData);

      } catch (error) {
        console.error("Error fetching favorite movies:", error);
      }
    };
    fetchFavoriteMovies();
  }, [user._id]);

  const handleUpdateProfile = () => {
    const updatedUser = {
      username,
      email,
      dob,
    };
    
    onUpdateUser(updatedUser);
  };

  const handleDeregister = () => {
    // Call an API or function to deregister the user
    axios.delete(`/users/${user._id}`)
      .then(() => onLogout())
      .catch(error => console.error("Error deregistering user:", error));
  };

  return (
    <div className="profile-view">
      <h1>My Profile</h1>
      
      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            value={user} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control 
            type="date" 
            value={dob} 
            onChange={(e) => setDob(e.target.value)} 
          />
        </Form.Group>

        {/* Disable for now */}
        {/* <Button variant="primary" onClick={handleUpdateProfile}>Update Profile</Button> */}
      </Form>

      <h3>Favorite Movies</h3>
      <ListGroup>
        {favoriteMovies.map(movie => (
          <ListGroup.Item key={movie.id}>
            <MovieCard movie={movie} userId={profile.user} token={profile.token} 
            onFavoriteToggle={onFavoriteToggle} />
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* <Button variant="danger" onClick={handleDeregister}>Deregister</Button> */}
      
      {/* <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link> */}
    </div>
  );
};