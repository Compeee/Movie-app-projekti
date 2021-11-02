import React from "react";
import PopularMovies from "./PopularMovies";
import { useState, useEffect } from "react";
import axios from "axios";
export default function HomePage() {
  const POPULAR_MOVIES = "/discover/movie?sort_by=popularity.desc&";
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
  return (
    <div>
      <PopularMovies movies={movies} />
    </div>
  );
}
