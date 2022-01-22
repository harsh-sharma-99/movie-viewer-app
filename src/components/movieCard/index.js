import React from "react";
import "./styles.scss";

const MovieCard = ({ movie }) => {
  return <div className="card">{movie.Title}</div>;
};

export default MovieCard;
