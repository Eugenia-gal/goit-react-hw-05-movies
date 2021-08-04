import React from 'react';
import { MdLocalMovies } from 'react-icons/md';
import s from './SearchForm.module.css';

function SeachForm({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.query.value);
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
