import "./PopularMovies.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const POPULAR_MOVIES = "/discover/movie?sort_by=popularity.desc&";

export default function MovieCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL +
          POPULAR_MOVIES +
          process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);

  console.log(movies);
  return (
    <div className="card-container">
      {movies.map((movie) => (
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
