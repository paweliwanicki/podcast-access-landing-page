import React from 'react';
import * as classes from '../style/BlueContainer.module.scss';

const blueContainer = (props) => {
  return (
    <div className={classes.blueContainer}>
      {props.children}
    </div>
  )
}

export default blueContainer;