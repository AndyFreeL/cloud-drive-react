import React from 'react';
import './input.scss'

const Input = (props) => {
  return (
    <input type={props.type}
           value={props.value}
           placeholder={props.placeholder}
           onChange={(e)=> props.setValue(e.target.value)}/>
  );
};

export default Input;
