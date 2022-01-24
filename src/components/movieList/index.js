import React, { memo } from "react";
import "./styles.scss";
import MovieCard from "./../movieCard/index";
import { Link } from "react-router-dom";
import SearchBox from "./../searchBox/index";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";

const rootClassName = "movie-list";

const MovieList = ({
  searchData,
  search,
  setSearch,
  page,
  setPage,
  apiStatus,
}) => {
  const paginationCount = searchData?.totalResults ?? page;

  const getMovieLists = () => {
    if (apiStatus) {
      return <CircularProgress />;
    }

    if (!apiStatus && searchData?.Response === "False") {
      return <h1>No Data Found</h1>;
    }

    if (searchData) {
      return (
        <div className={`${rootClassName}__list-wrapper`}>
          <div className={`${rootClassName}__list-cards-wrapper`}>
            {searchData?.Search?.map((movie) => (
              <Link
                key={movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                to={`/movie/${movie.imdbID}`}
              >
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
          <div className={`${rootClassName}__pagination`}>
            <Pagination
              count={parseInt(paginationCount, 10)}
              variant="outlined"
              shape="rounded"
              size="large"
              className={`${rootClassName}__pagination-root`}
              onChange={(...args) => setPage(args[1])}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className={rootClassName}>
      <SearchBox
        searchData={searchData}
        search={search}
        setSearch={setSearch}
        apiStatus={apiStatus}
      />
      <div className={`${rootClassName}__container`}>{getMovieLists()} </div>
    </div>
  );
};

export default memo(MovieList);
