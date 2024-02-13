


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
            checkLang(str) {
                // if ( str === 'en' ) {
                //     return 'us'
                // } else {
                //     return str
                // }

                switch (str) {
                    case 'en':
                        return 'us'
                    case 'ja':
                        return 'jp'
                    case 'he':
                        return 'il'
                    case 'zh':
                        return 'cn'
                    default:
                        return str
                }
            } 
        }
    }
</script>


<template>
    <!-- html componente -->
    <div class="card">
        <figure>
            <img :src="`${store.apiUrlImages}${propsElement.poster_path}`" :alt="propsElement.title">
        </figure>

        <div class="card-info">
            <h4>{{ propsElement.title }}</h4>
            <p>{{ propsElement.original_title }}</p>
            <!-- <span>{{ propsElement.original_language }}</span> -->
            <img width="24" :src="`https://flagsapi.com/${this.checkLang(propsElement.original_language).toUpperCase()}/shiny/24.png`" :alt="propsElement.original_language">
            <span>
                <span
                id="stars" 
                v-for="items in Math.floor((propsElement.vote_average) / 2)+1" >
                    <i class="fa-solid fa-star"></i>
                </span>
            </span>
            <!-- <span>{{ propsElement.vote_average }}</span> -->
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

        justify-content: center;

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

            #stars {
                color: yellow;
            }
        }
    }
    
</style>