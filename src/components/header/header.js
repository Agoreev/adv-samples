import React from "react";
import classes from "./header.module.css";
import { Link, withRouter } from "react-router-dom";

const Header = ({ title, image, location }) => {
  return (
    <div className={classes.Header}>
      <Link className={classes.BackLink} to={location.pathname}>
        &larr; Choose another category
      </Link>
      <div className={classes.LogoWrapper}>
        <img src={image} alt={title} />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default withRouter(Header);
