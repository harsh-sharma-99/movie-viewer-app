import React, { useEffect, useState } from "react";
import Select from "react-select";
import { debounce } from "../../utils";
import { useNavigate } from "react-router";
import "./styles.scss";

const SearchBox = ({ search, setSearch, data }) => {
  const [options, setOptions] = useState([
    { value: "tt0096895", label: "Batman" },
    { value: "tt0103776", label: "Batman Returns" },
  ]);
  const [suggestion, setSuggestion] = useState([]);
  const rootClassName = "movie-search";
  let navigate = useNavigate();

  const [inputValue, setinputValue] = useState("");

  //for updating options in select
  useEffect(() => {
    let optionArray = data?.Search?.map((movie) => {
      return {
        value: movie.imdbID,
        label: movie.Title,
      };
    });

    setOptions((prev) => [prev, optionArray]);
  }, [data]);

  useEffect(() => {
    localStorage.setItem("suggestion", JSON.stringify(suggestion));
  }, [suggestion]);

  function handleInput(e) {
    setSearch(e);
  }

  function handleSelectedValue(e) {
    setSuggestion((prev) => [...prev, e]);

    navigate(`./movie/${e.value}`);
  }
  const optimisedSearch = debounce((e) => handleInput(e));
  console.log(suggestion);
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__wrapper`}>
        <Select
          onInputChange={(e) => {
            setinputValue(e);
            optimisedSearch(e);
          }}
          inputValue={inputValue}
          onChange={(e) => handleSelectedValue(e)}
          options={options}
        />
      </div>
    </div>
  );
};

export default SearchBox;
