import React from "react";
import Movies from "./Movies";
import Shows from "./Shows";
import { useState, useEffect } from "react";
import axios from "axios";
export default function HomePage() {
  const POPULAR_MOVIES = "/discover/movie?sort_by=popularity.desc&";
  const POPULAR_SHOWS = "/discover/tv?sort_by=popularity.desc&";
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
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
    axios
      .get(
        process.env.REACT_APP_BASE_URL +
          POPULAR_SHOWS +
          process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setShows(res.data.results);
      });
  }, []);
  return (
    <div>
      <h3>Movies</h3>
      <Movies movies={movies} />
      <h3>Shows</h3>
      <Shows shows={shows} />
    </div>
  );
}
