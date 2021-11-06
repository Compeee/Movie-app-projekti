import React from "react";
import Movies from "./Movies";
import Shows from "./Shows";
import { useState, useEffect } from "react";
import axios from "axios";
// HomePage displays the most popular shows and movies
export default function Popular() {

  const POPULAR_MOVIES =
    process.env.REACT_APP_BASE_URL +
    "/discover/movie?sort_by=popularity.desc&" +
    process.env.REACT_APP_API_KEY;
  const POPULAR_SHOWS =
    process.env.REACT_APP_BASE_URL +
    "/discover/tv?sort_by=popularity.desc&" +
    process.env.REACT_APP_API_KEY;

  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  useEffect(() => {
    // Gets all the movies sorted by popularity.
    axios.get(POPULAR_MOVIES).then((res) => {
      setMovies(res.data.results);
    });
    // Gets all the tv shows sorted by popularity
    axios.get(POPULAR_SHOWS).then((res) => {
      setShows(res.data.results);
    });
  }, [POPULAR_MOVIES, POPULAR_SHOWS]);
  return (
    <div>
      <div>
        <h3>Movies</h3>
      </div>
      <Movies movies={movies} />
      <h3>Shows</h3>
      <Shows shows={shows} />
    </div>
  );
}
