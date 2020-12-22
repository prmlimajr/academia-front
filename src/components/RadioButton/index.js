import React from 'react';

import './RadioButton.css';

export default function RadioButton(props) {
  return (
    <label className='radioContainer'>
      {props.label}
      <input type='radio' name='radio' className='radioInput' />
      <span className='radioCheckmark'></span>
    </label>
  );
}
