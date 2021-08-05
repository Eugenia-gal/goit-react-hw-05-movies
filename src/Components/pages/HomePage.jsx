import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MoviesApiService from 'Services/moviesAPI';

const moviesApiService = new MoviesApiService();

export function HomePage() {
  const { pathname } = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApiService.fetchTrendingMovies().then(data => setMovies(data));
  }, []);

  return (
    <>
      <h1>Trending movies</h1>
      <ul>
        {movies.length > 0 &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: pathname,
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default HomePage;
