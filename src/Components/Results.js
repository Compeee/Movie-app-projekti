import React, { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./Movies";
import Shows from "./Shows";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
export default function Results() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [ShowPageNumber, setShowPageNumber] = useState(1);
  const [pages, setPages] = useState(0);
  const [showPages, setShowPages] = useState(0);
  const SEARCH_MOVIES =
    process.env.REACT_APP_BASE_URL +
    `/search/movie?query=${query}&` +
    process.env.REACT_APP_API_KEY;
  const SEARCH_SHOWS =
    process.env.REACT_APP_BASE_URL +
    `/search/tv?query=${query}&` +
    process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios.get(SEARCH_MOVIES + `&page=${pageNumber}`).then((res) => {
      setMovies(res.data.results);
      setPages(res.data.total_pages);
    });
    axios.get(SEARCH_SHOWS + `&page=${ShowPageNumber}`).then((res) => {
      setShows(res.data.results);
      setShowPages(res.data.total_pages);
    });
  }, [pageNumber, SEARCH_MOVIES, SEARCH_SHOWS, ShowPageNumber]);

  const handlePageClick = (data) => {
    setPageNumber(data.selected + 1);
  };
  const handlePageClickShow = (data) => {
    setShowPageNumber(data.selected + 1);
  };

  return (
    <div>
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
      <Shows shows={shows} />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel="Next"
        onPageChange={handlePageClickShow}
        pageCount={showPages}
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
