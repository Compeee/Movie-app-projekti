import React from "react";
import Movies from "./Movies";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import axios from "axios";
// HomePage displays the most popular shows and movies
export default function Upcoming() {
  const pages = 10;
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    // Gets upcoming movies
    axios.get(`/api/upcoming?page=${pageNum}`).then((res) => {
      setMovies(res.data.results);
      console.log(res.data.results);
    });
  }, [pageNum]);

  const handlePageClick = (data) => {
    setPageNum(data.selected + 1);
  };
  return (
    <div>
      <div className="col">
        {" "}
        <h3>Movies</h3>
      </div>
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
