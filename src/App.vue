
<!-- 

  Milestone 0:
  Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.


  Milestone 1:
  Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente. Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
  1. Titolo
  2. TitoloOriginale 3. Lingua
  4. Voto



-->



<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import axios from 'axios';
import { store } from './store';

  export default {
    components: {
      AppHeader,
      AppMain
    },
    data() {
      return {
        store
      }
    },
    methods: {
      search() {
        const apiParams = {
          method: 'GET',
          params: {
            api_key: store.apiKey,
            query: store.searchText.replace(/ /g, '%20').toLowerCase(),
            language: 'it-IT'
          }
        }

        this.getSeries(apiParams);
        this.getMovies(apiParams);
      },
      getMovies(apiParams) {
        // axios.get(`${store.apiUrlMovies}${store.apiKey}&query=${title}`).then( res => {
        //   console.log(res.data.results);
        //   console.log(`${store.apiUrlMovies}${store.apiKey}&query=${title}`);
        //   store.movies = res.data.results;
        // } )

        apiParams.url = store.apiUrlMovies;

        axios
        .request(apiParams)
        .then( res => {
          console.log(res.data);
          store.movies = res.data.results;
          // res.data.results.forEach(element => {
          //   store.movies.push({movie: element})
          // });
          store.movies.forEach(element => {
            this.getMovieCast(element, apiParams);
          });
          // this.getMovieCast(store.movies[0], apiParams);
        } )
        .catch( err => {
          console.error(err);
        } )
      },
      getMovieCast(movie, apiParams) {
        apiParams.url = `${store.apiUrlMoviesCast}/${movie.id}/credits`;
        // apiParams.params.movie_id = movie.id;

        axios
        .request(apiParams)
        .then( res => {
          // console.log(res.data.cast.slice(0, 5));
          movie.cast = res.data.cast.slice(0, 5);
        } )
        .catch( err => {
          console.error(err);
        } )
      },
      getSeries(apiParams) {
        apiParams.url = store.apiUrlSeries;

        axios
        .request(apiParams)
        .then( res => {
          console.log(res.data.results);
          store.series = res.data.results;
        } )
        .catch( err => {
          console.error(err);
        } )
      }
    }
  }

</script>

<template>
  <div id="web-app">
    <AppHeader @search="search" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './assets/styles/general.scss' as *;
@use './assets/styles/partials/mixins.scss' as *;
@use './assets/styles/partials/variables.scss' as *;

#web-app {
  height: 100vh;

  border: 2px solid red;
  background-color: #121212;

  color: white;
}
</style>
