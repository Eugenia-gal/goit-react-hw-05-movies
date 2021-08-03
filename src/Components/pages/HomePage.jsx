import { useState, useEffect } from 'react';
import MoviesApiService from 'Services/moviesAPI';

const moviesApiService = new MoviesApiService();

export function HomePage() {
  const [movies, setMovies] = useState([]);

useEffect(()=>{
moviesApiService.fetchTrendingMovies().then(data => setMovies(data));
},[])


  return <ul>
  {movies.length > 0 && movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
  </ul>;
}

export default HomePage;
