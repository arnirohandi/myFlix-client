import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import { Button, Form, ListGroup } from "react-bootstrap";
import { MovieCard } from "../movie-card/MovieCard";
import "./profile-view.scss";

export const ProfileView = ({ user, onLogout, onUpdateUser, onFavoriteToggle }) => {
  // console.log(user);
  const [username, setUsername] = useState(user); // ok
  const [email, setEmail] = useState(user); // This needs to be pulled from /users endpoint
  const [dob, setDob] = useState(user); // This needs to be pulled from /users endpoint
  const [favoriteMovies, setFavoriteMovies] = useState([]); // This needs to be pulled from /users endpoint
  
  useEffect(() => {
    // Fetch the user's favorite movies from the API
    const fetchFavoriteMovies = async () => {
      try {
        const response = await axios.get(`/users/${user._id}/favorites`);
        setFavoriteMovies(response.data);
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
            value={username} 
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

        <Button variant="primary" onClick={handleUpdateProfile}>Update Profile</Button>
      </Form>

      <h3>Favorite Movies</h3>
      <ListGroup>
        {/* {favoriteMovies.map(movie => (
          <ListGroup.Item key={movie._id}>
            <MovieCard movie={movie} onFavoriteToggle={onFavoriteToggle} />
          </ListGroup.Item>
        ))} */}
      </ListGroup>

      <Button variant="danger" onClick={handleDeregister}>Deregister</Button>
      
      <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
    </div>
  );
};