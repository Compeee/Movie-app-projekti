import React from "react";
import "./Movies.css";
export default function Shows(props) {
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
