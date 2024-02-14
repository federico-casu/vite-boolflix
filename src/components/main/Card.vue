


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

                if ( store.currentList === 'Movies' ) {
                    switch (str) {
                        case 'en':
                            return 'us'
                        case 'ja':
                            return 'jp'
                        case 'he':
                            return 'il'
                        case 'zh':
                            return 'cn'
                        case 'ko':
                            return 'kr'
                        case 'hi':
                            return 'in'
                        default:
                            return str
                    }
                } else {
                    return str;
                }

            } 
        }
    }
</script>


<template>
    <!-- html componente -->
    <div class="card">
        <!-- immagine di copertina -->
        <figure>
            <img :src="`${store.apiUrlImages}${propsElement.poster_path}`" :alt="propsElement.title">
        </figure>

        <!-- Info -->
        <div class="card-info">
            <!-- Titolo -->
            <h4>{{ propsElement.title ? propsElement.title : propsElement.name }}</h4>

            <!-- Titolo originale -->
            <p v-if="propsElement.title != propsElement.original_title || propsElement.name != propsElement.original_name">
                {{ propsElement.original_title ? propsElement.original_title : propsElement.original_name }}
            </p>

            <!-- Paese d'origine o Lingua -->
            <figure id="lang-flags">
                <img v-if="propsElement.origin_country" v-for="(item, index) in propsElement.origin_country" :key="index" width="24" :src="`https://flagsapi.com/${item}/shiny/24.png`" :alt="item">
                <img v-else width="24" :src="`https://flagsapi.com/${this.checkLang(propsElement.original_language).toUpperCase()}/shiny/24.png`" :alt="propsElement.original_language">
            </figure>

            <!-- Voto -->
            <span>
                <span
                id="stars" 
                v-for="items in Math.floor((propsElement.vote_average) / 2)+1" >
                    <i class="fa-solid fa-star"></i>
                </span>
            </span>

            <!-- Overview -->
            <p id="overview">
                {{ propsElement.overview }}
            </p>
        </div>
    </div>
    
</template>


<style lang="scss" scoped>
    /* stile del componente */

    @use '../../assets/styles/general.scss' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .card {
        flex-basis: calc(100% / 5 - (40px / 5));
        max-width: calc(100% / 5 - (40px / 5));
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

            #lang-flags {
                @include d-flex;
                align-items: center;
                gap: 10px;
            }

            #stars {
                color: yellow;
            }

            #overview {
                overflow: auto;
            }
        }
    }
    
</style>