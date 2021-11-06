import React from "react";
import { useState, useEffect } from "react";
import Movies from "./Movies";
import axios from "axios";
export default function SearchResult(props) {
  const [results, setResults] = useState([]);
  const SEARCH_MOVIES =
    process.env.REACT_APP_BASE_URL +
    `/search/movie?query=${props.searchValue}&` +
    process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios.get(SEARCH_MOVIES).then((res) => {
      setResults(res.data.results);
    });
  }, [props.searchValue, SEARCH_MOVIES]);

  return (
    <div>
      <Movies movies={results} />
    </div>
  );
}
