import "./Movies.css";
import React from "react";

export default function Movies(props) {
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
              <p>{movie.overview === "" ? "No overview available!" : movie.overview}</p> 
              <button>Add to watchlist</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
