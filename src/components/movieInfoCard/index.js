import React, { useState, useEffect, useCallback, memo } from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import DetailsCard from "../detailsCard";
import NoImg from "../../assets/images.png";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchSingleMovie } from "../../services";

const rootClassName = "movie-info-details-card";

const MovieInfoCard = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchSingleMovie(id);
      setData(response?.data);
    } catch (err) {
      console.log("Error occured:", err);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [id, fetchData]);
  return (
    <div className={rootClassName}>
      {data ? (
        <div className={`${rootClassName}__details`}>
          <div className={`${rootClassName}__image`}>
            {data?.Poster !== "N/A" ? (
              <img
                className={`${rootClassName}__image-base`}
                src={data?.Poster}
                alt="movie display img"
              />
            ) : (
              <img src={NoImg} alt="no pic" />
            )}
          </div>
          <div className={`${rootClassName}__details-panel`}>
            <div className={`${rootClassName}__title`}>{data?.Title}</div>
            <DetailsCard
              director={data?.Director}
              releaseDate={data?.Released}
              genre={data?.Genre}
              actors={data?.Actors}
              awards={data?.Awards}
              rating={data?.imdbRating}
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

export default memo(MovieInfoCard);
