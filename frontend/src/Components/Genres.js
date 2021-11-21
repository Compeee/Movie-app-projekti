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
  const handleAddGenre = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleRemoveGenre = (genre) => {
    setSelectedGenres(selectedGenres.filter((s) => s.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };
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
