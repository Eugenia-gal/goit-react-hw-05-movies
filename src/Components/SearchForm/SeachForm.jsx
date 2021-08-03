import React from 'react';
import { MdLocalMovies } from 'react-icons/md';
import s from './SearchForm.module.css';

function SeachForm({ onSubmit }) {
  const sendQuery = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements);
    // onSubmit(e.target.value);
  };
  return (
    <form className={s.search_form} id="search-form">
      <input
        type="text"
        className={s.input}
        name="query"
        autoComplete="off"
        placeholder="Search movies..."
        onSubmit={sendQuery}
      />
      <button type="submit" className={s.btn}>
        <MdLocalMovies />
      </button>
    </form>
  );
}

export default SeachForm;
