import React from "react";
import Trending from "./Trending";
import { useState, useEffect } from "react";
import axios from "axios";
// HomePage displays trending shows and movies
export default function Home() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    // Gets trending movies / shows from API
    axios.get("/api").then((res) => {
      setTrending(res.data.results);
    });
  }, []);
  return (
    <div>
      <div className="col">
        <h3>Trending now!</h3>
      </div>
      <Trending data={trending} />
    </div>
  );
}
