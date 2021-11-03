import React from 'react'
import "./Movies.css"
export default function Shows(props) {
    return (
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
            </div>
          </div>
        ))}
      </div>
    )
}
