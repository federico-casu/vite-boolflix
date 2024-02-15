


<script>
// Js componente

import Card from './Card.vue';
import { store } from '../../store';

export default {
    name: 'AppMain',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>


<template>
    <!-- html componente -->
    <!-- Rappresentazione delle liste -->
    <main>
        <!-- Lista Film -->
        <div v-if="store.currentList === 'Movies' && store.movies.length != 0" class="container card-container">
            <Card v-show="element.genres.includes(store.currentFilterGenre) || store.currentFilterGenre == ''" v-for="(element, index) in store.movies" :key="index" :props-element="element" />
        </div>
        <!-- Lista Serie TV -->
        <div v-else-if="store.currentList === 'TV Shows' && store.series.length != 0" class="container card-container">
            <Card v-show="element.genres.includes(store.currentFilterGenre) || store.currentFilterGenre == ''" v-for="(element, index) in store.series" :key="index" :props-element="element" />
        </div>
        <div v-else id="nothing-to-see" class="container card-container"></div>
    </main>
</template>


<style lang="scss" scoped>
/* stile del componente */

@use '../../assets/styles/partials/mixins' as *;

main {
    height: calc(100% - 10vh);
    width: 100%;
    border: 1px solid blue;
    overflow: auto;

    .card-container {
        border: 1px dashed yellow;
        margin-block: 2rem;

        @include d-flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    #nothing-to-see {
        height: 90%;

        background-image: url('../../assets/img/nothing-to-see.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
}
</style>