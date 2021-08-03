import { useState } from 'react';
import SearchForm from 'Components/SearchForm';

function MoviesPage() {
  // const [query, setQuery] = useState('');
  // const [movies, setMovies] = useState([]);

  // const onSubmit = text => {
  //   setQuery(text);
  // };

  return (
    <div>
      <h1>Enter search query</h1>
      <SearchForm />
    </div>
  );
}

export default MoviesPage;
