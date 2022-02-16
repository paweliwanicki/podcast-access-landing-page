import React from 'react';
import * as classes from '../style/BrandIcon.module.scss';

const brandIcon = (props)  => {
  return (
    <img className={classes.brandIcon} alt={props.alt} title={props.title} src={props.src} data-label={props.label}/>
  )
}

export default brandIcon;