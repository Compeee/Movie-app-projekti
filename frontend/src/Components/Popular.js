import React from "react";
import Movies from "./Movies";
import ReactPaginate from "react-paginate";
import Shows from "./Shows";
import Genres from "./Genres";
import { useState, useEffect } from "react";
import axios from "axios";
// HomePage displays the most popular shows and movies
export default function Popular() {
  const pages = 10;
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [sPageNum, setSPageNum] = useState(1);
  const [shows, setShows] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    // Gets all the movies sorted by popularity.
    axios.get(`/api/popularmovies?page=${pageNum}`).then((res) => {
      setMovies(res.data.results);
      console.log(res.data.results);
    });
    // Gets all the tv shows sorted by popularity
    axios.get(`/api/popularshows?page=${sPageNum}`).then((res) => {
      setShows(res.data.results);
    });
  }, [pageNum, sPageNum]);

  const handlePageClick = (data) => {
    setPageNum(data.selected + 1);
  };
  const handlePageClickS = (data) => {
    setSPageNum(data.selected + 1);
  };
  return (
    <div>
      <div className="col">
        <h3>Movies</h3>
      </div>{" "}
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPageNum}
      />
      <Movies movies={movies} />
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
      <div className="col">
        {" "}
        <h3>Shows</h3>
      </div>
      <Shows shows={shows} />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel="Next"
        onPageChange={handlePageClickS}
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
