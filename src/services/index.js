import axios from "axios";

export const fetchData = (search) => {
  return axios
    .get(`http://www.omdbapi.com/?s=${search}&apikey=e61470f7`)
    .then((response) => response)
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export const fetchMovieList = (page = 1, search, searchData) => {
  let flag;
  if (searchData.Response === "True") {
    flag = search;
  } else if (search !== "" && searchData.Response === "False") {
    flag = search;
  } else if (search === "") {
    flag = "batman";
  }
  return axios
    .get(`http://www.omdbapi.com/?s=${flag}&page=${page}&apikey=e61470f7`)
    .then((response) => response)
    .catch((error) => {
      console.error("There was an error!", error);
    });
};
