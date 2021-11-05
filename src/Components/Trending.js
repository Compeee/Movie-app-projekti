import "./Movies.css";
import React from 'react'

export default function Movies(props) {
  return (
    // Maps out the movies into movie cards
    // Card displays poster, title, ratings and release date
    <div className="card-container">
      {props.data.map((content) => (
        <div className="card" key={content.id}>
          <div className="card-image">
            <img
              src={"https://image.tmdb.org/t/p/original" + content.poster_path}
              alt=""
            ></img>
          </div>
          <div>
            <div>
              <b className="title">{content.title}</b>
            </div>
            <div className="ratingDate">
              <span>{content.vote_average}&#11088;</span>
              <span>{content.media_type}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
