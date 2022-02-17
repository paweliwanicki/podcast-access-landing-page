import React, { useState } from "react";
import * as classes from "./FormContainer.module.scss";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../Button/Button";

const FormContainer = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [isValidated, setIsValidated] = useState(false);

  const validateInput = (e) => {
    const email = document.querySelector(`#${props.inputID}`).value;
    if (email.length > 3 && validateEmailAddress(email)) {
      // include a@x;
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setIsValidated(true);
  };

  const validateEmailAddress = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validationsText = {
    error: "Oops! Please check your email",
    success: "Yea! Email is correct",
  };

  const btnText = "Request access";

  return (
    <div className={classes.formContainer}>
      <CustomInput
        type={`text`}
        id={props.inputID}
        placeholder={`E-mail address`}
        validationsText={validationsText}
        isValid={isValid}
        isValidated={isValidated}
        setIsValidated={setIsValidated}
      />
      <Button type={`button`} onClick={validateInput} text={btnText} />
      {props.children}
    </div>
  );
};

export default FormContainer;
