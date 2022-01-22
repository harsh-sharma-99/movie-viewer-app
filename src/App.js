import React, { useEffect, useState } from "react";
import "./global.scss";
import MovieList from "./components/movieList";
import { Routes, Route } from "react-router-dom";
import MovieInfoCard from "./components/movieInfoCard";
import Header from "./components/header";
import { fetchData } from "./services/index";

function App() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const rootClassName = "movie-root-layout";

  const getSearchData = async () => {
    const response = await fetchData(search);
    console.log(response);
    setData(response?.data);
  };
  useEffect(() => {
    getSearchData();
  }, [search]);

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
            />
          }
        ></Route>
        <Route path="/movie/:id" element={<MovieInfoCard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
