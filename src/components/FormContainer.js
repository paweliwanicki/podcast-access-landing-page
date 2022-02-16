import React from "react";
import * as classes from "../style/FormContainer.module.scss";
import CustomInput from './CustomInput';
import Button from './Button';


const formContainer = (props) => {

  const validateInput = (e) => {
    console.log(e);
  }


  const validationText = 'Oops! Please check your email';
  const btnText = 'Request access';
  

  return (
    <div className={classes.formContainer}>
      <CustomInput
        type={`text`}
        id={"test"}
        placeholder={`E-mail address`}
        validationText={validationText}
      />
      <Button type={`button`} onClick={validateInput} text={btnText} />
      {props.children}
    </div>
  );
};

export default formContainer;
