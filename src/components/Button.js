import React from "react";
import * as classes from "../style/Button.module.scss";
import propTypes from "prop-types";

const button = (props) => {
  return (
    <button
      className={classes.customButton}
      type={props.type}
      onClick={props.onClick}
    >{props.text}</button>
  );
};

button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
};

export default button;
