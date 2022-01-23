import React from "react";
import "./styles.scss";

const rootClassName = "movie-header";

const Header = () => {
  return (
    <div className={rootClassName}>
      <h1>
        Find <span className={`${rootClassName}__alt`}>Movies!</span>
      </h1>
    </div>
  );
};

export default Header;
