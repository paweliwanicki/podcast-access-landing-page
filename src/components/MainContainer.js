import React from 'react';
import * as classes from '../style/MainContainer.module.scss';
import CustomInput from './CustomInput';
import Button from './Button';
import Logo from './Logo';


const mainContainer = (props) => {

  const clickHandler = () => {
    console.log(this);
  }


  const validationText = 'Oops! Please check your email';
  const btnText = 'Request access';
  return (
    <div className={classes.mainContainer}>
        <Logo />
        <CustomInput type={`text`} id={'test'} placeholder={`E-mail address`} validationText={validationText}/>
        <Button type={`button`} onClick={clickHandler} text={btnText}/>
    </div>
  )
}

export default mainContainer;