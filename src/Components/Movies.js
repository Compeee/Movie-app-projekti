import "./Movies.css";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Movies(props) {
  const { addToWatchlist, watchlist } = useContext(GlobalContext);
  return (
    // Maps out the movies into movie cards
    // Card displays poster, title, ratings and release date
    <div className="card-container">
      {props.movies.map((movie) => (
        <div className="card" key={movie.id}>
          <div className="card-image">
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              alt=""
            ></img>
          </div>
          <div>
            <div>
              <b className="title">{movie.title}</b>
            </div>
            <div className="ratingDate">
              <span>{movie.vote_average}&#11088;</span>
              <span>{movie.release_date}</span>
            </div>
            <div className="movie-overview">
              <h2>Overview</h2>
              <p>
                {movie.overview === ""
                  ? "No overview available!"
                  : movie.overview}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => addToWatchlist(movie)}
                disabled={watchlist.find((m) =>
                  m.id === movie.id ? true : false
                )}
              >
                Add to watchlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
