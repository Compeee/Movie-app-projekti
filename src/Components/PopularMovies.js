import "./PopularMovies.css";
import React from 'react'

export default function PopularMovies(props) {

  return (
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
          </div>
        </div>
      ))}
    </div>
  );
}
