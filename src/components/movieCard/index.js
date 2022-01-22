import React from "react";
import "./styles.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={movie.Poster} alt="display pic" />
      </div>
      <div className="card__title">
        <span>{movie.Title}</span>
      </div>
    </div>
  );
};

export default MovieCard;
