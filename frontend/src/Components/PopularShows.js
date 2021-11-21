import React from "react";
import ReactPaginate from "react-paginate";
import Shows from "./Shows";
import Genres from "./Genres";
import { useState, useEffect } from "react";
import axios from "axios";
// HomePage displays the most popular shows and movies
export default function Popular() {
  const [pages, setPages] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [shows, setShows] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const makeGenreUrl = (selectedGenres) => {
    if (selectedGenres.length < 1) {
      return "";
    }
    const genreIds = selectedGenres.map((g) => g.id);
    return genreIds.reduce((acc, curr) => acc + "," + curr);
  };

  const genreUrl = makeGenreUrl(selectedGenres);

  useEffect(() => {
    // Gets all the tv shows sorted by popularity
    axios.get(`/api/popularshows?page=${pageNum}&with_genres=${genreUrl}`).then((res) => {
      setShows(res.data.results);
      setPages(res.data.total_pages);
    });
  }, [genreUrl, pageNum]);
  const handlePageClick = (data) => {
    setPageNum(data.selected + 1);
  };
  return (
    <div>
      <div className="col">
        {" "}
        <h3>Shows</h3>
      </div>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPageNum}
      />
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
