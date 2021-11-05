import React from "react";
import Trending from "./Trending";
import { useState, useEffect } from "react";
import axios from "axios";
// HomePage displays the most popular shows and movies
export default function Home() {
  const TRENDING_CONTENT = "/trending/all/day?";
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    // Gets trending movies / shows from API
    axios
      .get(
        process.env.REACT_APP_BASE_URL +
          TRENDING_CONTENT +
          process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setTrending(res.data.results);
      });
  }, []);
  return (
    <div>
      <h3>Trending</h3>
      <Trending data={trending} />
    </div>
  );
}
