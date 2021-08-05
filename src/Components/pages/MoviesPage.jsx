import { useRouteMatch, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchForm from 'Components/SearchForm';
import MoviesApiService from '../../Services/moviesAPI';

const moviesApiService = new MoviesApiService();

function MoviesPage() {
  const { search } = useLocation();
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search) {
      setQuery(search);
    }
  }, [search]);

  useEffect(() => {
    if (query !== '') {
      moviesApiService
        .fetchMoviesByKeyWord(query)
        .then(data => setMovies(data));
    }
  }, [query]);

  return (
    <div>
      <h1>Enter search query</h1>
      <SearchForm onSubmit={text => setQuery(text)} />

      <ul>
        {movies.length > 0 &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: `${url}${search}`,
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MoviesPage;
