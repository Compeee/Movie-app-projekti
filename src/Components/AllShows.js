import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Shows from "./Shows";
const ALL_SHOWS =
  process.env.REACT_APP_BASE_URL +
  "/discover/tv?" +
  process.env.REACT_APP_API_KEY;
export default function AllShows() {
  const [shows, setShows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    // Gets all the shows from api, starts displaying from pagenumber given.
    axios.get(ALL_SHOWS + `&page=${pageNumber}`).then((res) => {
      setShows(res.data.results);
      setPages(res.data.total_pages);
    });
  }, [pageNumber]);

  // updates current page to the one user clicked in pagination bar
  const handlePageClick = (data) => {
    setPageNumber(data.selected + 1);
  };

  return (
    <div>
      <Shows shows={shows} />
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
