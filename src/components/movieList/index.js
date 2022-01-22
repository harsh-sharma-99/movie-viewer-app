import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { PulseLoader } from "react-spinners";
import MovieCard from "./../movieCard/index";
import { Link } from "react-router-dom";
import SearchBox from "./../searchBox/index";

const MovieList = ({ searchData, search, setSearch }) => {
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);

  const fetchMovieList = () => {
    if (page >= 1) {
      axios
        .get(`http://www.omdbapi.com/?s=batman&page=${page}&apikey=e61470f7`)
        .then((response) => setData(response?.data))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  useEffect(() => {
    fetchMovieList();
  }, [page]);

  return (
    <div className="movie-list">
      <SearchBox data={data} search={search} setSearch={setSearch} />
      <div className="movie-list--container">
        {!data ? (
          <PulseLoader size={20} color="#4CDBE5" loading />
        ) : (
          data?.Search?.map((movie) => {
            return (
              <Link
                key={movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                to={`/movie/${movie.imdbID}`}
              >
                <MovieCard movie={movie} />
              </Link>
            );
          })
        )}
      </div>
      <button onClick={() => setPage((page) => page + 1)}>NextPage</button>
      <button onClick={() => setPage((page) => page - 1)}>PrevPage</button>
    </div>
  );
};

export default MovieList;
