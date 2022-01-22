import React, { useEffect, useState } from "react";
import Select from "react-select";
import { debounce } from "../../utils";
import "./styles.scss";

const SearchBox = ({ search, setSearch, searchData }) => {
  const [options, setOptions] = useState([]);
  const [load, setLoad] = useState(false);
  const rootClassName = "movie-search";
  const [inputValue, setinputValue] = useState("");

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
    setSearch(e);
    setLoad(false);
  }

  function handleSelectedValue(e) {}
  const optimisedSearch = debounce((e) => handleInput(e), 1000);

  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__wrapper`}>
        <Select
          onInputChange={(e) => {
            setinputValue(e);
            setLoad(true);
            optimisedSearch(e);
          }}
          onChange={(e) => handleSelectedValue(e)}
          options={options}
          isLoading={load}
          isClearable="true"
        />
      </div>
    </div>
  );
};

export default SearchBox;
