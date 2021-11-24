import React, { useState, useEffect } from "react";
import axios from "axios";
import Trending from "./Trending";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
export default function Results() {
  const { query } = useParams();
  const [content, setContent] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState(0);
  // Gets all the tv shows and movies with the given search query, pagenumber for pagination.
  useEffect(() => {
    axios.get(`/api/search?query=${query}&page=${pageNumber}`).then((res) => {
      setContent(res.data.results);
      setPages(res.data.total_pages);
    });
  }, [pageNumber, query]);

  const handlePageClick = (data) => {
    setPageNumber(data.selected + 1);
  };
  return (
    <div>
      <div className="col">{<h3>Results of {query}:</h3>}</div>
      <Trending data={content} />
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
