
<!-- 

  Milestone 0:
  Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.

-->



<script>

import AppHeader from './components/AppHeader.vue';

  export default {
    components: {
      AppHeader
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }

</script>

<template>

  <div id="web-app">
    <AppHeader />
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
