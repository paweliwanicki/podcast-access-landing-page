import React from 'react';
import * as classes from './BlueContainer.module.scss';
import propTypes from 'prop-types';

const BlueContainer = (props) => {
  return (
    <div className={classes.blueContainer}>
      {props.children}
    </div>
  )
}

BlueContainer.propTypes = {
  children: propTypes.node,
}

export default BlueContainer;