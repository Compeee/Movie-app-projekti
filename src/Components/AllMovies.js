import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Movies from "./Movies";
const ALL_MOVIES =
  process.env.REACT_APP_BASE_URL +
  "/discover/movie?" +
  process.env.REACT_APP_API_KEY;
export default function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    axios.get(ALL_MOVIES + `&page=${pageNumber}`).then((res) => {
      setMovies(res.data.results);
      setPages(res.data.total_pages);
    });
  }, [pageNumber]);

  const handlePageClick = (data) => {
    setPageNumber(data.selected + 1);
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
    </div>
  );
}
