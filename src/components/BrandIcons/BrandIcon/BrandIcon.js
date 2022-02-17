import React from 'react';
import * as classes from './BrandIcon.module.scss';

const BrandIcon = (props)  => {
  return (
    <img className={classes.brandIcon} alt={props.alt} title={props.title} src={props.src} data-label={props.label}/>
  )
}

export default BrandIcon;