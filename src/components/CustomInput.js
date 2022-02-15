import React from "react";
import * as classes from "../style/CustomInput.module.scss";
import PropTypes from "prop-types";

const customInput = (props) => {
  const validClassName = props.isValid ? classes.isValid : classes.isInvalid;

  return (
    <div className={classes.inputContainer}>
      <input
        id={props.id}
        className={classes.customInput}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
      <label
        className={[classes.customLabel,validClassName].join(" ")}
        for={props.id}
      >
        {props.validationText}
      </label>
    </div>
  );
};

customInput.propTypes = {
  type: PropTypes.string,
};

export default customInput;
