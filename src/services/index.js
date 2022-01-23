import axios from "axios";

export const fetchData = (search, page = 1) => {
  return axios
    .get(`https://www.omdbapi.com/?s=${search}&page=${page}&apikey=e61470f7`)
    .then((response) => response)
    .catch((error) => {
      console.error("There was an error!", error);
    });
};
