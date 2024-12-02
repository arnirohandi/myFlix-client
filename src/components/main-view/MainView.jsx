import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/MovieCard";
import { MovieView } from "../movie-view/MovieView";
import { LoginView } from "../login-view/LoginView";
import { SignupView } from "../signup-view/SignupView";
import { ProfileView } from "../profile-view/ProfileView";
import { NavigationBar } from "../navigation-bar/NavigationBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    user: "",
    email: "",           
    token: "",            
    dateofbirth: ""     
  });

  // Filter functionality
  const [filters, setFilters] = useState({
    genre: "",
    year: "",
  });

  // Handler for when the user logs in
  const handleLogin = (user, profile) => {
    setUser(user);  // Set user state
    setProfile(profile);  // Set profile state
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
            genre: movie.genre.name,
            year: movie.year,
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);

  // Handler for filter changes
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Filter movies based on genre and year
  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = filters.genre ? movie.genre === filters.genre : true;
    const matchesYear = filters.year ? movie.year === parseInt(filters.year) : true;
    return matchesGenre && matchesYear;
  });

  // console.log(movies.map((movie) => movie.id));
  return (
    <BrowserRouter>
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
                    <MovieView movies={movies} />
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
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {/* Filter Section */}
                    <div className="filter-section">
                      <label>Genre:</label>
                      <select
                        name="genre"
                        value={filters.genre}
                        onChange={handleFilterChange}
                      >
                        <option value="">All Genres</option>
                        <option value="Action">Action</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Drama">Drama</option>
                      </select>

                      <label>Year:</label>
                      <select
                        name="year"
                        value={filters.year}
                        onChange={handleFilterChange}
                      >
                        <option value="">All Years</option>
                        <option value="1997">1997</option>
                        <option value="1999">1999</option>
                        <option value="2008">2008</option>
                        <option value="2010">2010</option>
                        <option value="2019">2019</option>
                      </select>
                    </div>

                    {/* Display Filtered Movies */}
                    {filteredMovies.length === 0 ? (
                      <Col>No movies found.</Col>
                    ) : (
                      <>
                        {filteredMovies.map((movie) => (
                          <Col className="mb-4" key={movie.id} md={3}>
                            <MovieCard movie={movie} />
                          </Col>
                        ))}
                      </>
                    )}
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
