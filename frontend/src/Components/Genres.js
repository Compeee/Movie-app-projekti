import axios from "axios";
import React from "react";
import "./Genres.css";
import { useEffect } from "react";
export default function Genres({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) {
  // Adds the selected genre to selectedGenres and removes it from genres.
  const handleAddGenre = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  // Removes the selected genre from selectedGenres and adds it back to genres.
  const handleRemoveGenre = (genre) => {
    setSelectedGenres(selectedGenres.filter((s) => s.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };
  // If the type given to Genre is movie, it gets the movie genres, if its tv it gets all the tv show genres.
  useEffect(() => {
    if (type === "movie") {
      axios.get("/api/moviegenres").then((res) => {
        setGenres(res.data.genres);
      });
    } else if (type === "tv") {
      axios.get("/api/showgenres").then((res) => {
        setGenres(res.data.genres);
      });
    }
    return () => {
      setGenres({});
    };
  }, [setGenres, type]);
  // Maps over selectedGenres and genres to create buttons for them.
  return (
    <div className="tags">
      {selectedGenres.map((selectedGenre) => (
        <button
          key={selectedGenre.id}
          className="tagSelected"
          onClick={() => handleRemoveGenre(selectedGenre)}
        >
          {selectedGenre.name}
        </button>
      ))}
      {genres.map((genre) => (
        <button
          className="tag"
          key={genre.id}
          onClick={() => handleAddGenre(genre)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}
