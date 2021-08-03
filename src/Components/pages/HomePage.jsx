import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoviesApiService from 'Services/moviesAPI';

const moviesApiService = new MoviesApiService();

export function HomePage() {
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
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default HomePage;
