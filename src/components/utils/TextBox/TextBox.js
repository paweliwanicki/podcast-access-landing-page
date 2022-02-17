import React from 'react';
import * as classes from './TextBox.module.scss';

const TextBox = props => {
  const textColor = props.color;
  return (
    <div className={classes.textBox} >
      <p className={classes[textColor]}>
          {props.text}
      </p>
    </div>
  )
}

export default TextBox;