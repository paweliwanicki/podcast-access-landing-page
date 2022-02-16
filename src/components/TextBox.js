import React from 'react';
import * as classes from '../style/TextBox.module.scss';

const textBox = props => {
  const textColor = props.color;
  return (
    <div className={classes.textBox} >
      <p className={classes[textColor]}>
          {props.text}
      </p>
    </div>
  )
}

export default textBox;