import React from "react";
import * as classes from "./CustomInput.module.scss";
import PropTypes from "prop-types";

const CustomInput = (props) => {
  const validClassName = props.isValid ? classes.isValid : classes.isInvalid;
  const isValidated = props.isValidated;
  const validKey = props.isValid ? "success" : "error";

  const onChangehandler = (e) => {
    const value = e.target.value;
    if (value === "") {
      //props.setIsValidated(false);
    }
  };

  const validationText = props.validationsText[validKey];

  return (
    <div className={classes.inputContainer}>
      <input
        id={props.id}
        className={classes.customInput}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        ref={props.inputRef}
        onChange={onChangehandler}
      />
      {isValidated ? (
        <label
          className={[classes.customLabel, validClassName].join(" ")}
          htmlFor={props.id}
        >
          {validationText}
        </label>
      ) : null}
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
};

export default CustomInput;
