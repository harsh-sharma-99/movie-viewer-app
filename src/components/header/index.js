import React from "react";
import "./styles.scss";

const Header = () => {
  const rootClassName = "movie-header";
  return (
    <div className={rootClassName}>
      <h1>
        M
        <span role="img" aria-label="coder">
          🎥
        </span>
        vieFinder
      </h1>
    </div>
  );
};

export default Header;
