import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import s from './SearchForm.module.css';

function SeachForm({ onSubmit }) {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const input = e.target.elements.query.value;
    onSubmit(input);
    if (input !== '') {
      history.push(`${pathname}?&query=${input}`);
    } else {
      history.push(`${pathname}`);
    }
  };
  return (
    <form className={s.search_form} id="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className={s.input}
        name="query"
        autoComplete="off"
        placeholder="Search movies..."
      />
      <button type="submit" className={s.btn}>
        <MdLocalMovies className={s.icon} />
      </button>
    </form>
  );
}

export default SeachForm;
