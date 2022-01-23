import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import DetailsCard from "../detailsCard";
import NoImg from "../../assets/images.png";
import CircularProgress from "@mui/material/CircularProgress";

const rootClassName = "movie-info-details-card";

const MovieInfoCard = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  const fetchData = useCallback(() => {
    if (id) {
      axios
        .get(`https://www.omdbapi.com/?i=${id}&apikey=e61470f7`)
        .then((response) => setData(response?.data))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [id, fetchData]);
  console.log(data, "card");
  return (
    <div className={rootClassName}>
      {data ? (
        <div className={`${rootClassName}__details`}>
          <div className={`${rootClassName}__image`}>
            {data?.Poster !== "N/A" ? (
              <img
                className={`${rootClassName}__image-base`}
                src={data.Poster}
                alt="movie display img"
              />
            ) : (
              <img src={NoImg} alt="no pic" />
            )}
          </div>
          <div className={`${rootClassName}__details-panel`}>
            <div className={`${rootClassName}__title`}>{data.Title}</div>
            <DetailsCard
              director={data.Director}
              releaseDate={data.Released}
              genre={data.Genre}
              actors={data.Actors}
              awards={data.Awards}
              rating={data.imdbRating}
              externalRatings={data?.Ratings}
              runTime={data?.Runtime}
            />
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default MovieInfoCard;
