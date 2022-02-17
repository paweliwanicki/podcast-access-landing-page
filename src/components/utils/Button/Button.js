import React from "react";
import * as classes from "./Button.module.scss";
import propTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={classes.customButton}
      type={props.type}
      onClick={props.onClick}
    >{props.text}</button>
  );
};

Button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
