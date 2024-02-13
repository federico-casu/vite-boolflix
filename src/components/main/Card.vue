


<script>
    // Js componente

    import { store } from '../../store';

    export default {
        name: 'Card',
        props: {
            propsElement: Object
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
    <div class="card">
        <figure>
            <img :src="`${store.apiUrlImages}${propsElement.poster_path}`" :alt="propsElement.title">
        </figure>

        <!-- NOTE mettere queste informazioni dentro un div a cui dare un padding -->
        <div class="card-info">
            <h4>{{ propsElement.title }}</h4>
            <p>{{ propsElement.original_title }}</p>
            <span>{{ propsElement.original_language }}</span>
            <span>{{ propsElement.vote_average }}</span>
        </div>
    </div>
    
</template>


<style lang="scss" scoped>
    /* stile del componente */

    @use '../../assets/styles/general.scss' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .card {
        flex-basis: calc(100% / 7 - (60px / 7));
        max-width: calc(100% / 7 - (60px / 7));
        @include d-flex;
        flex-direction: column;
        gap: 0.5rem;
        // padding: 0.8rem;
        border: 1px solid pink;
        min-height: 250px;

        position: relative;

        &:hover .card-info {
            @include d-flex;
        }

        .card-info {
            display: none;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.8rem;
            position: absolute;

            height: 100%;

            top: 0;
            left: 0;
            right: 0;
            background-color: rgba($color: #121212, $alpha: 0.5);
        }
    }
    
</style>