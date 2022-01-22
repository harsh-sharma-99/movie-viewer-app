import React, { useEffect, useState } from "react";
import axios from "axios";
import "./global.scss";
import MovieList from "./components/movieList";
import SearchBox from "./components/searchBox/index";
import { Routes, Route } from "react-router-dom";
import MovieInfoCard from "./components/movieInfoCard";
import Header from "./components/header";

function App() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const rootClassName = "movie-root-layout";

  const fetchData = () => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=e61470f7`)
      .then((response) => setData(response?.data))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div className={rootClassName}>
      <Header />
      <SearchBox data={data} search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<MovieList data={data} />}></Route>
        <Route path="/movie/:id" element={<MovieInfoCard />}></Route>
      </Routes>
    </div>
  );
}

export default App;