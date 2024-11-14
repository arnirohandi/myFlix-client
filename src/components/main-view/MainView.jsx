// src/components/main-view/MainView.jsx
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/MovieCard";
import { MovieView } from "../movie-view/MovieView";
import { LoginView } from "../login-view/LoginView";
import { SignupView } from "../signup-view/SignupView";
import "./main-view.scss"; // main view specific styles

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token")

  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from the API when the component mounts
  useEffect(() => {
    if (!token) return;

    fetch("https://myflix-api-app-ff32afce7dc8.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => ({
          id: doc.key,
          title: doc.title,
          image: `https://example.com/movie1`,
          director: doc.director_name?.[0],
        }));
        setMovies(moviesFromApi);
      })
      .catch(() => {
        alert("Failed to fetch movies");
      });
  }, [token]);

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  if (!user) {
    return (
      <div>
        <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token); }} />
        <SignupView />
      </div>
    );
  }

  if (selectedMovie) {
    return (
      <>
        <button onClick={handleLogout}>Logout</button>
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
      </>
    );
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      {movies.length === 0 ? (
        <div>The list is empty!</div>
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)}
          />
        ))
      )}
    </div>
  );
};
