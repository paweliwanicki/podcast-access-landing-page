import React from "react";
import * as classes from "./CustomImage.module.scss";


const CustomImage = (props) => {

  const className = classes[props.className] ? classes[props.className] : props.className;

  return <img src={props.src} alt={props.alt} className={className} />;
};

export default CustomImage;
