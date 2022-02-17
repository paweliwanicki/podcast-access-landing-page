import React from 'react';
import * as classes from './BlueContainer.module.scss';

const BlueContainer = (props) => {
  return (
    <div className={classes.blueContainer}>
      {props.children}
    </div>
  )
}

export default BlueContainer;