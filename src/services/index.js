import axios from "axios";

export const fetchData = (search) => {
  return axios
    .get(`http://www.omdbapi.com/?s=${search}&apikey=e61470f7`)
    .then((response) => response)
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export const fetchMovieList = (page = 1) => {
  return axios
    .get(`http://www.omdbapi.com/?s=batman&page=${page}&apikey=e61470f7`)
    .then((response) => response)
    .catch((error) => {
      console.error("There was an error!", error);
    });
};
