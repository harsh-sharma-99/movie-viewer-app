import axios from "axios";
import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";

const MovieInfoCard = () => {
  const [data, setData] = useState("");
  const rootClassName = "movie-info-layout";
  const rootClassNameTwo = "movie-info-layout__main-data";
  const rootClassNameThree = "movie-info-layout__ratings";
  let { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    if (id) {
      axios
        .get(`http://www.omdbapi.com/?i=${id}&apikey=e61470f7`)
        .then((response) => setData(response?.data))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  };
  console.log(data);
  return (
    <div className={rootClassName}>
      <div className={rootClassNameTwo}>
        <div className={`${rootClassNameTwo}__image`}>
          <img src={data.Poster} alt="movie display img" />
        </div>
        <div className={`${rootClassNameTwo}__details`}>
          <div className={`${rootClassNameTwo}__details--label`}>
            <span>Title:</span>
            {data.Title}
          </div>
          <div className={`${rootClassNameTwo}__details--label`}>
            <span>Director:</span>
            {data.Director}
          </div>
          <div className={`${rootClassNameTwo}__details--label`}>
            <span>Release Date:</span>
            {data.Released}
          </div>
          <div className={`${rootClassNameTwo}__details--label`}>
            <span>Genre:</span>
            {data.Genre}
          </div>
          <div className={`${rootClassNameTwo}__details--label`}>
            <span>Actors:</span>
            {data.Actors}
          </div>
          <div className={`${rootClassNameTwo}__details--label`}>
            <span>Awards</span>
            {data.Awards}
          </div>
          <div className={`${rootClassNameTwo}__details--label`}>
            <span>IMDB rating:</span>
            {data.imdbRating}
          </div>
        </div>
      </div>
      <div className={rootClassNameThree}>
        {data?.Ratings.map((rating) => {
          return (
            <div className={`${rootClassNameThree}__title`}>
              {rating.Source}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieInfoCard;
