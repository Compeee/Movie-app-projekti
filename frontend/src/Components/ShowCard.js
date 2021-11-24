import "./Movies.css";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function ShowCard(props) {
  const { addToWatchlist, watchlist } = useContext(GlobalContext);
  return (
    // Maps out the shows into show cards
    // card displays poster, name, ratings and first air date
    <div className="card-container">
      {props.shows.map((show) => (
        <div className="card" key={show.id}>
          <div className="card-image">
            <img
              src={"https://image.tmdb.org/t/p/original" + show.poster_path}
              alt=""
            ></img>
          </div>
          <div>
            <div>
              <b className="title">{show.name}</b>
            </div>
            <div className="ratingDate">
              <span>{show.vote_average}&#11088;</span>
              <span>{show.first_air_date}</span>
            </div>
            <div className="movie-overview">
              <h2>Overview</h2>
              <p>
                {show.overview === ""
                  ? "No overview available!"
                  : show.overview}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => addToWatchlist(show)}
                // Button is disabled if the show is already found in the watchlist
                disabled={watchlist.find((m) =>
                  m.id === show.id ? true : false
                )}
              >
                Add to watchlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
