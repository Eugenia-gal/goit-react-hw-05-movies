import React from 'react';
import s from './Button.module.css';

function Button({ onClick }) {
  return (
    <button type="button" className={s.btn} onClick={onClick}>
      Go Back
    </button>
  );
}

export default Button;
