import React, { useEffect, useState } from "react";
import Select from "react-select";
import { INITIAL_SEARCH_VALUE } from "../../constants";
import "./styles.scss";

const rootClassName = "movie-search";

const SearchBox = ({ search, setSearch, searchData, apiStatus }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);
  //for updating options in select
  useEffect(() => {
    let optionArray = searchData?.Search?.map((movie) => {
      return {
        value: movie.imdbID,
        label: movie.Title,
      };
    });
    if (search === "") {
      setOptions([]);
    } else {
      optionArray && setOptions(optionArray);
    }
  }, [search, searchData]);

  function handleSelectedValue(e) {
    setSearch(e?.label ?? INITIAL_SEARCH_VALUE);
  }

  const handleSelectInput = (e, action) => {
    if (action?.action !== "input-blur" && action?.action !== "menu-close") {
      setSearch(e);
    }
  };

  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__wrapper`}>
        <Select
          placeholder="Search your favourite movie..."
          options={options}
          isLoading={apiStatus}
          isClearable="true"
          onInputChange={(e, action) => handleSelectInput(e, action)}
          onChange={(e) => handleSelectedValue(e)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
