import React from 'react';

import './TextArea.css';

export default function TextArea(props) {
  return (
    <div className='formGroup'>
      <textarea {...props} className='txtAreaInput' />
      <label className='signinLabel'>{props.label}</label>
    </div>
  );
}
