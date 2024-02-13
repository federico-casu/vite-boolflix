
import { reactive } from "vue";

export const store = reactive({
    apiKey: 'api_key=444cf24f305e693301ecd3a903019cce',
    apiUrlMovies: 'https://api.themoviedb.org/3/search/movie?',
    apiUrlImages: 'https://image.tmdb.org/t/p/w342',
    searchText: '',
    cards: []
})