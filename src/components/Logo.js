import React from "react";
import * as classes from "../style/Logo.module.scss";
import logoImage from "../images/desktop/logo.svg";

const logo = (props) => {
  return <img src={logoImage} alt={`logo`} className={classes.logo} />;
};

export default logo;
