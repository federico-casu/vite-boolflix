


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
                store,
                flipped: false
            }
        },
        methods: {
            checkLang(str) {
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
            },
            toggleCard() {
                this.flipped = !this.flipped;
            }
        }
    }
</script>


<template>
    <!-- html componente -->
    <div @click="[toggleCard(), store.currentTrailer = propsElement.trailer]" @mouseleave="flipped ? toggleCard() : ''" class="card">
        <Transition name="flip">
            <div :key="flipped">
                <!-- immagine di copertina -->
                <figure v-show="!flipped" class="card-cover">
                    <img :src="propsElement.poster_path != null ? `${store.apiUrlImages}${propsElement.poster_path}` : `${`../../src/assets/img/cover_image_unavailable.png`}`" :alt="propsElement.title">
                </figure>
        
                <!-- Info -->
                <div v-show="flipped" class="card-info">
                    <!-- Titolo -->
                    <h4>{{ propsElement.title ? propsElement.title : propsElement.name }}</h4>
        
                    <!-- Titolo originale -->
                    <p v-if="propsElement.title != propsElement.original_title || propsElement.name != propsElement.original_name">
                        {{ propsElement.original_title ? propsElement.original_title : propsElement.original_name }}
                    </p>
        
                    <!-- Paese d'origine o Lingua -->
                    <figure id="lang-flags">
                        <img 
                        v-if="propsElement.origin_country && propsElement.origin_country.length != 0" 
                        v-for="(item, index) in propsElement.origin_country" 
                        :key="index" 
                        width="24" 
                        :src="`https://flagsapi.com/${item}/shiny/24.png`" 
                        :alt="item">
                        <img 
                        v-else 
                        width="24" 
                        :src="`https://flagsapi.com/${this.checkLang(propsElement.original_language).toUpperCase()}/shiny/24.png`" 
                        :alt="propsElement.original_language">
                    </figure>
        
                    <!-- Voto -->
                    <span>
                        <span
                        id="stars" 
                        v-for="items in Math.round((propsElement.vote_average) / 2)" >
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span
                        v-for="items in (5 - Math.round((propsElement.vote_average) / 2))">
                            <i class="fa-regular fa-star"></i>
                        </span>
                    </span>
        
                    <!-- Cast -->
                    <span v-if="propsElement.cast && propsElement.cast.length != 0">
                        <strong>Cast: </strong>
                        <span v-for="(actor, index) in propsElement.cast" :key="index">{{ actor.name }}<span v-if="index != propsElement.cast.length-1">, </span></span>
                    </span>
        
                    <!-- Generi -->
                    <span v-if="propsElement.genres && propsElement.genres.length != 0">
                        <strong>Genres: </strong>
                        <span v-for="(genre, index) in propsElement.genres" :key="index">{{ genre }}<span v-if="index != propsElement.genres.length-1">, </span></span>
                    </span>
        
                    <!-- Overview -->
                    <p v-if="propsElement.overview" id="overview">
                       <strong>Overview: </strong> {{ propsElement.overview }}
                    </p>
                </div>
            </div>
        </Transition>

    </div>
    
</template>


<style lang="scss" scoped>
    /* stile del componente */

    @use '../../assets/styles/general.scss' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .flip-enter-active {
        transition: all 0.4s ease;
    }
  
    .flip-leave-active {
        display: none;
    }
  
    .flip-enter-from, .flip-leave-to {
        transform: rotateY(180deg);
        opacity: 0; 
    }
    .card {
        flex-basis: calc(100% / 5 - (40px / 5));
        max-width: calc(100% / 5 - (40px / 5));
        @include d-flex;
        flex-direction: column;
        gap: 0.5rem;
        // padding: 0.8rem;
        border: 1px solid pink;
        min-height: 250px;
        cursor: pointer;

        position: relative;

        justify-content: center;


        &:hover {
            transform: scale(1.1);
            z-index: 1;
        }
        &:hover .card-info {
            @include d-flex;
        }

        > div, 
        .card-cover {
            width: 100%;
            height: 100%;
        }

        .card-cover {
            img {
                width: 100%;
                height:100%;
                object-fit: cover;
            }
        }

        .card-info {
            display: none;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.8rem;
            position: absolute;

            overflow: auto;

            height: 100%;

            top: 0;
            left: 0;
            right: 0;
            background-color: rgba($color: #303030, $alpha: 1);

            #lang-flags {
                @include d-flex;
                align-items: center;
                gap: 10px;
            }

            #stars {
                color: yellow;
            }

            // #overview {
            //     overflow: auto;
            // }
        }
    }
    
</style>