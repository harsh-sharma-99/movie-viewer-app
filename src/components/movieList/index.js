import React, { useEffect, useState } from "react";
import "./styles.scss";
import { PulseLoader } from "react-spinners";
import MovieCard from "./../movieCard/index";
import { Link } from "react-router-dom";
import SearchBox from "./../searchBox/index";
import { fetchMovieList } from "../../services";

const MovieList = ({ searchData, search, setSearch }) => {
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);

  const fetchList = async () => {
    const response = await fetchMovieList(page);
    setData(response?.data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    if (page >= 1) {
      fetchList();
    } else if (page < 1) {
      setPage(1);
    }
  }, [page]);

  return (
    <div className="movie-list">
      <SearchBox
        searchData={searchData}
        search={search}
        setSearch={setSearch}
      />
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
