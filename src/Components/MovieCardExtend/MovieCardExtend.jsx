import React from 'react';
import { Link } from 'react-router-dom';
import s from './MovieCardExtend.module.css';

function MovieCardExtend({ url }) {
  return (
    <div className={s.wrapper}>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={`${url}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
}

export default MovieCardExtend;
