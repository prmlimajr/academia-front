import React from 'react';
import { removeReadOnly } from '../../utils';

import './Input.css';

export default function Input(props) {
  return (
    <div className='formGroup'>
      <input
        {...props}
        className='signinInput'
        readOnly
        onFocus={removeReadOnly}
      />
      <label className='signinLabel'>{props.label}</label>
    </div>
  );
}
