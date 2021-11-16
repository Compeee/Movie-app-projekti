import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(GlobalContext);
  return (
    <div>
      <h2 className="h2">Watchlist</h2>
      <div className="card-container">
        {watchlist.map((content) => (
          <div className="card" key={content.id}>
            <div className="card-image">
              <img
                src={
                  "https://image.tmdb.org/t/p/original" + content.poster_path
                }
                alt=""
              ></img>
            </div>
            <div>
              <div>
                <b className="title">
                  {!content.title ? content.name : content.title}
                </b>
              </div>
              <div className="ratingDate">
                <span>{content.vote_average}&#11088;</span>
                <span>{content.media_type === "movie" ? "Movie" : "Show"}</span>
              </div>
              <div className="movie-overview">
                <h2>Overview: </h2>
                <p>{content.overview}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => removeFromWatchlist(content.id)}
                >
                  Remove from watchlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
