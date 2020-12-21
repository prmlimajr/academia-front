import React from 'react';

import './Input.css';

export default function Input(props) {
  return (
    <div className='formGroup'>
      <input {...props} className='signinInput' />
      <label className='signinLabel'>{props.label}</label>
    </div>
  );
}
