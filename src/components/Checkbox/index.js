import React from 'react';

import './Checkbox.css';

export default function Checkbox(props) {
  return (
    <label htmlFor='checkbox' className='labelContainer'>
      {props.label}
      <input id='checkbox' type='checkbox' className='checkboxInput' />
      <span className='checkmark'></span>
    </label>
  );
}
