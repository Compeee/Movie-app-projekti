import React from "react";
import MovieCard from "./MovieCard";
import ReactPaginate from "react-paginate";
import Genres from "./Genres";
import { useState, useEffect } from "react";
import axios from "axios";
// HomePage displays the most popular shows and movies
export default function Movies() {
  const [pages, setPages] = useState(10);
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  // with_genres accepts the genres like this "genre.id, genre1.id, genre2.id..."
  // Function goes through the selectedGenres and creates a suitable string.
  const makeGenreUrl = (selectedGenres) => {
    if (selectedGenres.length < 1) {
      return "";
    }
    const genreIds = selectedGenres.map((g) => g.id);
    return genreIds.reduce((acc, curr) => acc + "," + curr);
  };

  const genreUrl = makeGenreUrl(selectedGenres);

  useEffect(() => {
    // Gets all the movies sorted by popularity, and by the genre u want
    axios
      .get(`/api/popularmovies?page=${pageNum}&with_genres=${genreUrl}`)
      .then((res) => {
        setMovies(res.data.results);
        setPages(res.data.total_pages);
      });
  }, [genreUrl, pageNum]);

  const handlePageClick = (data) => {
    setPageNum(data.selected + 1);
  };
  return (
    <div>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPageNum}
      />
      <MovieCard movies={movies} />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageCount={pages}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
      />
    </div>
  );
}
