
import { reactive } from "vue";

export const store = reactive({
    apiKey: '444cf24f305e693301ecd3a903019cce',
    apiUrlMovies: 'https://api.themoviedb.org/3/search/movie',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv',
    apiUrlImages: 'https://image.tmdb.org/t/p/w342',
    apiUrlSeriesCast: 'https://api.themoviedb.org/3/tv',
    apiUrlMoviesCast: 'https://api.themoviedb.org/3/movie', // .id, .cast
    apiUrlMoviesGenres: 'https://api.themoviedb.org/3/movie',  // .id, .genres (ogni genere ha .id e .name)
    apiUrlMoviesTrailer: 'https://api.themoviedb.org/3/movie',
    apiUrlSeriesTrailer: 'https://api.themoviedb.org/3/tv/{series_id}/videos',
    iframeTrailerLink: 'https://www.youtube.com/embed/',  // va aggiunta dinamicamente la key
    searchText: '',
    movies: [],
    series: [],
    allMovieGenres: [],
    allSeriesGenres: [],
    currentList: 'Movies',
    currentFilterGenre: '',
    currentTrailer: '' 
})