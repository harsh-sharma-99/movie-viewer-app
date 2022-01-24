import React from "react";
import "./styles.scss";
import Header from "./../header/index";

const rootClassName = "movie-root-layout";

const Layout = (props) => {
  return (
    <div className={rootClassName}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
