// src/components/movie-view/MovieView.jsx
import { useParams } from "react-router";
import { Link } from "react-router";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  // console.log(movies);
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId)
  return (
    <div>
      <div>
        <img src={movie.image} alt={movie.title}/>
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description} </span>
      </div>
      <div>
        <span>Genre: </span>
        < span>{movie.genre}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director} </span>
      </div>
      <div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
      </div>
    </div>
  );
};



