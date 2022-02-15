import React from 'react';
import * as classes from '../styles/CustomInput.module.scss';
import PropTypes from 'prop-types';


const customInput = (props) => {
  const validClassName = props.isValid ? classes.valid : classes.invalid;
  return (
    <div className={classes.inputContainer}>
      <input id={props.id} className={classes.customInput} type={props.type} value={props.value} />
      <label for={props.id} className={validClassName}>{props.text}</label>
    </div>
  )
}

customInput.propTypes = {
  type:  PropTypes.string
}

export default customInput;