


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
    <main>
        <div v-if="store.currentList === 'Movies'" class="container card-container">
            <Card v-for="(element, index) in store.movies" :key="index" :props-element="element" />
        </div>
        <div v-else-if="store.currentList === 'TV Shows'" class="container card-container">
            <Card v-for="(element, index) in store.series" :key="index" :props-element="element" />
        </div>
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
}
</style>