
<script>
    // Js componente
    export default {
        name: 'AppHeader',
        data() {
            return {
                menu: [ 'TV Shows', 'Movies', 'Recently Added', 'My List' ]
            }
        },
        methods: {
            
        }
    }
</script>


<template>
    <!-- html componente -->
    <header>
        <div class="container">
            <figure>
                <img src="../assets/img/logo.png" alt="Boolflix">
            </figure>

            <nav>
                <ul>
                    <li v-for="(item, index) in menu" >{{ item }}</li>
                </ul>
            </nav>
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
    
    }
    
</style>