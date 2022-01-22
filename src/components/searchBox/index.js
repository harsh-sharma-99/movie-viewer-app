import React, { useEffect, useState } from "react";
import Select from "react-select";
import { debounce } from "../../utils";
import { useNavigate } from "react-router";
import "./styles.scss";

const SearchBox = ({ search, setSearch, data }) => {
  const [suggestion, setSuggestion] = useState([]);
  const [options, setOptions] = useState(suggestion);
  const [finalOption, setFinalOption] = useState([]);
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

    optionArray && setOptions(optionArray);
  }, [data]);

  useEffect(() => {
    // localStorage.setItem("suggestion", JSON.stringify(suggestion));
    setFinalOption([...suggestion, ...options]);
  }, [data, suggestion]);

  function handleInput(e) {
    setSearch(e);
  }

  function handleSelectedValue(e) {
    setSuggestion((prev) => [...prev, e]);

    navigate(`./movie/${e.value}`);
  }
  const optimisedSearch = debounce((e) => handleInput(e));

  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__wrapper`}>
        <Select
          onInputChange={(e) => {
            setinputValue(e);
            optimisedSearch(e);
          }}
          value={inputValue}
          onChange={(e) => handleSelectedValue(e)}
          options={finalOption}
        />
      </div>
    </div>
  );
};

export default SearchBox;
