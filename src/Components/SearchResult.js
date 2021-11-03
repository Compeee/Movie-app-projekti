import React from "react";
import { useState, useEffect } from "react";
import Movies from "./Movies";
import axios from "axios";
export default function SearchResult(props) {
  const [results, setResults] = useState([]);
  const SEARCH_MOVIES = `/search/movie?query=${props.searchValue}&`;

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL +
          SEARCH_MOVIES +
          process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setResults(res.data.results);
      });
  }, [props.searchValue, SEARCH_MOVIES]);

  return (
    <div>
      <Movies movies={results} />
    </div>
  );
}
