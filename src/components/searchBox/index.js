import React, { useEffect, useState } from "react";
import Select from "react-select";
import { debounce } from "../../utils";
import "./styles.scss";

const SearchBox = ({ search, setSearch, searchData }) => {
  const [options, setOptions] = useState([]);
  const [load, setLoad] = useState(false);
  const rootClassName = "movie-search";
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   console.log(searchData);
  // }, [searchData]);
  //for updating options in select
  useEffect(() => {
    let optionArray = searchData?.Search?.map((movie) => {
      return {
        value: movie.imdbID,
        label: movie.Title,
      };
    });
    if (inputValue === "") {
      setOptions([]);
    } else {
      optionArray && setOptions(optionArray);
    }
  }, [inputValue, searchData]);

  function handleInput(e) {
    setLoad(false);
    setSearch(e);
  }

  function handleSelectedValue(e) {}

  const optimisedSearch = debounce(handleInput, 1000);
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__wrapper`}>
        <Select
          placeholder="Search your favourite movie..."
          options={options}
          isLoading={load}
          isClearable="true"
          inputValue={inputValue}
          onInputChange={(e, action) => {
            optimisedSearch(e);
            setLoad(true);
            if (
              action?.action !== "input-blur" &&
              action?.action !== "menu-close"
            ) {
              setInputValue(e);
              setLoad(true);
            }
          }}
          onChange={(e) => handleSelectedValue(e)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
