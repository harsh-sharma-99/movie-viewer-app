import React from "react";
import "./styles.scss";
import NoImg from "../../assets/images.png";

const rootClassName = "movie-viewer-card";

const MovieCard = ({ movie }) => {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__image`}>
        {movie.Poster !== "N/A" ? (
          <img src={movie.Poster} alt="display pic" />
        ) : (
          <img src={NoImg} alt="no pic" />
        )}
      </div>
      <div className={`${rootClassName}__title`} title={movie.Title}>
        {movie.Title}
      </div>
    </div>
  );
};

export default MovieCard;
