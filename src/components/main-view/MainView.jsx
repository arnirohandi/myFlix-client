import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/MovieCard";
import { MovieView } from "../movie-view/MovieView";
import { LoginView } from "../login-view/LoginView";
import { SignupView } from "../signup-view/SignupView";
import { ProfileView } from "../profile-view/ProfileView";
import { NavigationBar } from "../navigation-bar/NavigationBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import logo from '../../assets/logo.png';
import './main-view.scss';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    user: "",
    email: "",           
    token: "",            
    dateofbirth: ""     
  });

  // Handler for when the user logs in
  const handleLogin = (user, profile) => {
    setUser(user); 
    setProfile(profile);
    // console.log("Logged in with user:", user);
    // console.log("Profile:", profile);
  };

  useEffect(() => {
    fetch("https://myflix-api-app-ff32afce7dc8.herokuapp.com/movies")
      .then((response) => response.json())
      .then((movies) => {
        const moviesFromApi = movies.map((movie) => {
          return {
            id: movie._id,
            title: movie.title,
            image: movie.image_url,
            director: movie.director.name,
            description: movie.description,
            genre: movie.genre.name
          };
        });

        setMovies(moviesFromApi);
        setFilteredMovies(moviesFromApi); // Initialize filtered movies
      });
  }, []);

  // Filter movies whenever the search query changes
  useEffect(() => {
    if (!searchQuery) {
      setFilteredMovies(movies);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(lowercasedQuery) ||
          movie.director.toLowerCase().includes(lowercasedQuery) ||
          movie.genre.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies]);

  // console.log(movies.map((movie) => movie.id));
  return (
    <BrowserRouter>
      <div className="logo-container">
        <img 
          src={logo} 
          alt="Website Logo" 
          className="logo"  // Applying CSS class for the logo
        />
      </div>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
        }}
      />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col md={8}>
                    <ProfileView profile={profile}/>
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user, profile) => handleLogin(user, profile)} />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/movie/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={filteredMovies} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <>
                    <Col md={12} className="mb-4">
                      <Form.Control
                        type="text"
                        placeholder="Search by title, director, or genre"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </Col>
                    {filteredMovies.map((movie) => (
                      <Col className="mb-4" key={movie.id} md={3}>
                        <MovieCard
                          movie={movie}
                          userId={profile.user}
                          token={profile.token}
                        />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
