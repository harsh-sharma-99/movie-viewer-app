import React, { useEffect, useState, useCallback, memo } from "react";
import "./global.scss";
import MovieList from "./components/movieList";
import { Routes, Route } from "react-router-dom";
import MovieInfoCard from "./components/movieInfoCard";
import Header from "./components/header";
import { fetchData } from "./services/index";
import useDebounce from "./hooks/useDebounce";
import { INITIAL_SEARCH_VALUE } from "./constants";

const rootClassName = "movie-root-layout";

function App() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState(INITIAL_SEARCH_VALUE);
  const [page, setPage] = useState(1);
  const [apiStatus, setApiStatus] = useState(false);
  const debouncedVal = useDebounce(search, 1000);

  const getSearchData = useCallback(async () => {
    setApiStatus(true);
    try {
      const response = await fetchData(debouncedVal, page);
      setData(response?.data);
      setApiStatus(false);
    } catch {
      setApiStatus(false);
    }
  }, [page, debouncedVal]);

  useEffect(() => {
    setApiStatus(true);
  }, [search]);

  useEffect(() => {
    getSearchData(debouncedVal);
  }, [debouncedVal, getSearchData, page]);

  return (
    <div className={rootClassName}>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              searchData={data}
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
              apiStatus={apiStatus}
            />
          }
        ></Route>
        <Route path="/movie/:id" element={<MovieInfoCard />}></Route>
      </Routes>
    </div>
  );
}

export default memo(App);
