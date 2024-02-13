


<script>
    // Js componente
    export default {
        name: 'Card',
        props: {
            propsElement: Object
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
    <!-- html componente -->
    <div class="card">
        <!-- <figure>
            <img :src="propsImage" :alt="propsTitle">
        </figure> -->
        <h4>{{ propsElement.title }}</h4>
        <p>{{ propsElement.original_title }}</p>
        <span>{{ propsElement.original_language }}</span>
        <span>{{ propsElement.vote_average }}</span>
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

        padding: 0.8rem;
        border: 1px solid pink;

        min-height: 250px;
    }
    
</style>