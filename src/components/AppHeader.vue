
<script>
    // Js componente

    import { store } from '../store';

    export default {
        name: 'AppHeader',
        data() {
            return {
                store,
                menu: [ 'TV Shows', 'Movies', 'Recently Added', 'My List' ],
                searchBarDisplay: false
            }
        },
        methods: {
            changeDisplay() {
                this.searchBarDisplay ? this.searchBarDisplay = false : this.searchBarDisplay = true
            }
        }
    }
</script>


<template>
    <!-- html componente -->
    <header>
        <div class="container">
            <div id="logo-and-menu">
                <!-- Logo -->
                <figure>
                    <img src="../assets/img/logo.png" alt="Boolflix">
                </figure>
    
                <!-- Menu -->
                <nav>
                    <ul>
                        <li v-for="(item, index) in menu" >{{ item }}</li>
                    </ul>
                </nav>
            </div>

            <!-- Search bar -->
            <div id="search">
                <input 
                v-show="searchBarDisplay" 
                v-model="store.searchText" 
                type="text" 
                placeholder="Search.."
                @keyup.enter="$emit('search')">
                <i @click="changeDisplay" class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </header>
    
</template>


<style lang="scss" scoped>
    /* stile del componente */

    @use '../assets/styles/general.scss' as *;
    @use '../assets/styles/partials/mixins' as *;

    header {
        height: 10vh;

        border: 1px solid lime;
        
        div.container {
            border: 1px dashed orange;
            height: 100%;

            @include d-flex-align-center;
            justify-content: space-between;

            #logo-and-menu {

                @include d-flex-align-center;

                figure {
                    max-height: 100%;
                    width: fit-content;
    
                    > img {
                        width: 80%;
                    }
                }
    
                nav {
                    ul {
                        @include d-flex-align-center;
    
                        gap: 1.5rem;
    
                        li {
                            list-style-type: none;
                            font-size: 1.3rem;
                        }
                    }
                }
            }


            #search {
                height: 100%;
                width: 30%;

                @include d-flex-align-center;
                justify-content: flex-end;
                gap: 1rem;

                input {
                    height: 50%;
                    width: 100%;
                    border: 0;
                    background-color: transparent;
                    border-bottom: 1px solid white;
                    // border-radius: 10px;
                    padding: 10px;
                    color: white;
                }

                i {
                    height: 50%;
                    aspect-ratio: 1;

                    @include d-flex-align-center;
                    justify-content: center;
                    font-size: 1.5rem;
                    // color: white;
                }

                margin-right: 1rem;
            }


            
        }
    
    }
    
</style>