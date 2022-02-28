import React from "react";
import * as classes from "./BrandIcon.module.scss";
import propTypes from "prop-types";

const BrandIcon = (props) => {
  return (
    <img
      className={classes.brandIcon}
      alt={props.alt}
      title={props.title}
      src={props.src}
      data-label={props.label}
    />
  );
};

BrandIcon.propTypes = {
  alt: propTypes.string,
  title: propTypes.string,
  src: propTypes.string,
  label: propTypes.string,
};

export default BrandIcon;
