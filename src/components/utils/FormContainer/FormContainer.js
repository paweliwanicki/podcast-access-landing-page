import React, { useState } from "react";
import * as classes from "./FormContainer.module.scss";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../Button/Button";
import propTypes from "prop-types";

const FormContainer = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const validationsText = {
    error: "Oops! Please check your email",
    success: "Yeah! Email is correct, request was sended.",
  };
  const btnText = "Request access";

  const inputOnChangeHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const validateInput = (e) => {
    if (inputValue.length > 3 && validateEmailAddress(inputValue)) {
      // include a@x;
      setIsSending(true);
      setIsBtnDisabled(true);

      // simulate sending request
      const request = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(inputValue);
        }, 1300);
      });

      request.then(() => {
        setIsValid(true);
        setInputValue("");
        setIsSending(false);
        setIsBtnDisabled(false);
        setIsValidated(true);
        setTimeout(() => {
          setIsValidated(false);
        }, 1500);
      });
    } else {
      setIsValidated(true);
      setIsValid(false);
    }
  };

  const validateEmailAddress = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className={classes.formContainer}>
      <CustomInput
        type={`text`}
        id={props.inputID}
        placeholder={`E-mail address`}
        validationsText={validationsText}
        isValid={isValid}
        isValidated={isValidated}
        isSending={isSending}
        showLoader={true}
        value={inputValue}
        onChange={inputOnChangeHandler}
      />
      <Button
        type={`button`}
        onClick={validateInput}
        text={btnText}
        disabled={isBtnDisabled}
      />
      {props.children}
    </div>
  );
};

FormContainer.propTypes = {
  inputID: propTypes.string.isRequired,
  children: propTypes.node,
};

export default FormContainer;
