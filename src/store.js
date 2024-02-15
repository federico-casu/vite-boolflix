
import { reactive } from "vue";

export const store = reactive({
    apiKey: '444cf24f305e693301ecd3a903019cce',
    apiUrlMovies: 'https://api.themoviedb.org/3/search/movie',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv',
    apiUrlImages: 'https://image.tmdb.org/t/p/w342',
    // apiUrlAggregateCreditsTVShows: 'https://api.themoviedb.org/3/tv/series_id/aggregate_credits',
    apiUrlMoviesCast: 'https://api.themoviedb.org/3/movie', // .id, .cast
    apiUrlMoviesGenres: 'https://api.themoviedb.org/3/movie/movie_id',  // .id, .genres (ogni genere ha .id e .name)
    searchText: '',
    movies: [],
    series: [],
    currentList: 'Movies'
})