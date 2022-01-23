import React from "react";
import "./styles.scss";
import Rating from "@mui/material/Rating";

const rootClassName = "movie-viewer-details-card";

const DetailsCard = ({
  director,
  releaseDate,
  genre,
  actors,
  awards,
  rating,
  externalRatings,
}) => {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__details`}>
        <span className={`${rootClassName}__label`}>Rating:</span>
        <Rating
          title={rating}
          name="read-only"
          precision={0.1}
          value={parseInt(rating, 10) / 2}
          max={5}
          readOnly
        />
      </div>
      <div className={`${rootClassName}__details`}>
        <span className={`${rootClassName}__label`}>Genre:</span>
        <span className={`${rootClassName}__value`}>{genre}</span>
      </div>
      <div className={`${rootClassName}__details`}>
        <span className={`${rootClassName}__label`}>Director:</span>
        <span className={`${rootClassName}__value`}>{director}</span>
      </div>
      <div className={`${rootClassName}__details`}>
        <span className={`${rootClassName}__label`}>Release Date:</span>
        <span className={`${rootClassName}__value`}>{releaseDate}</span>
      </div>

      <div className={`${rootClassName}__details`}>
        <span className={`${rootClassName}__label`}>Release Date:</span>
        <span className={`${rootClassName}__value`}>{releaseDate}</span>
      </div>

      <div className={`${rootClassName}__details`}>
        <span className={`${rootClassName}__label`}>Starcast:</span>
        <span className={`${rootClassName}__value`}>{actors}</span>
      </div>

      <div className={`${rootClassName}__details`}>
        <span className={`${rootClassName}__label`}>Awards:</span>
        <span className={`${rootClassName}__value`}>{awards}</span>
      </div>

      <div className={`${rootClassName}__reviews`}>
        External Reviews:
        <ul>
          {externalRatings?.map((rating) => {
            return (
              <li className={`${rootClassName}__bullets`}>
                {rating.Source}: {rating.Value}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DetailsCard;
