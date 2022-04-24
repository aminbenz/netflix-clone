const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const DEFAULT_LANGUAGE = 'language=en-US'
const PAGE = 1

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&${DEFAULT_LANGUAGE}`,
  fetchPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&${DEFAULT_LANGUAGE}`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&${DEFAULT_LANGUAGE}`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${DEFAULT_LANGUAGE}&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${DEFAULT_LANGUAGE}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${DEFAULT_LANGUAGE}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${DEFAULT_LANGUAGE}&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&${DEFAULT_LANGUAGE}&with_genres=99`,
  fetchUpcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&${DEFAULT_LANGUAGE}&page=${PAGE}`,
}

export default requests
