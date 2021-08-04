import React from 'react';
import { Link } from 'react-router-dom';
import s from './Button.module.css';

function Button(href) {
  return (
    <Link to={href} className={s.btn}>
      Go Back
    </Link>
  );
}

export default Button;
