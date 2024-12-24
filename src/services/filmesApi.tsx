import api from "./api";

const apiKey = "api_key=26a5acde3c85f147265aab9ba1dd1b77";
const language = "language=pt-BR";

export const getFilms = (page: any) => {
  const url = `trending/movie/week?${apiKey}&${language}&page=${page}`;
  return api.get(url);
};

export const getFilmsNowPlaying = (page: any) => {
  const url = `movie/now_playing?${apiKey}&${language}&page=${page}`;
  return api.get(url);
};

export const getGenders = (page: any) => {
  const url = `discover/movie?${apiKey}&${language}&page=${page}`;
  return api.get(url);
};