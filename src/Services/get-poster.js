import noPoster from '../img/No_image_poster.png';

export function getPosterModal(data) {
  const BASE_PATH = 'https://image.tmdb.org/t/p/w500';
  data.poster = '';
  if (data.poster_path) {
    data.poster = BASE_PATH + data.poster_path;
  } else {
    data.poster = `${noPoster}`;
  }
  return data;
}

export function getPoster(movies) {
  const BASE_PATH = 'https://image.tmdb.org/t/p/w500';
  for (let movie of movies) {
    movie.poster = '';
    if (movie.profile_path) {
      movie.poster = BASE_PATH + movie.profile_path;
    } else {
      movie.poster = `${noPoster}`;
    }
  }
  return movies;
}
