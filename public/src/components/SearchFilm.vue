<template>
    <div id="search-film">
        <button class="deconnection" v-on:click="deconnect">Loggout</button>
        <form v-on:submit.prevent="">
            <label for="search">Rechercher :</label>
            <input id="search" type="text" v-model.lazy="searchInput">
        </form>
        <p>Il y a {{ this.numberResults }} film correspondant à votre recherche</p>
        <ul class="films">
                <v-card width="400" v-for="(thisFilm, index) in searchResult" :key="index" @click="voirDetails(thisFilm.id)">
                    <img :src=sitePath+thisFilm.poster_path />
                    <v-card-title>{{ thisFilm.original_title }}</v-card-title>
                    <v-card-text>
                        {{ thisFilm.overview }}
                    </v-card-text>
                </v-card>
        </ul>
    </div>
</template>

<script>
//import {doLoggedIn} from '../service/connection'
import {mapState} from 'vuex'
export default {
    name: 'SearchFilm',
    data() {
        return {
            searchResult: [],
            searchInput: "",
            numberResults: 0,
            //logg: doLoggedIn(),
            sitePath: "https://image.tmdb.org/t/p/w500/"
        }
    },

    computed: {
        ...mapState(['isLogged']),
        ...mapState(['films']),
    },

    methods: {
        deconnect(){
            this.$store.commit('changeLogg');
        },
        getSearchResult(){
            this.searchResult = [];
            this.films.forEach(element => {
                if(element.original_title === this.searchInput) this.searchResult.push(element);
            });
            this.numberResults = this.searchResult.length;
        },
        voirDetails(id){
            this.$router.push({ name: 'detailsComponent', params: { id: id} }); 
        }
    },

    watch: {
        searchInput(){
            this.getSearchResult();
        },
        films(){
            this.searchResult = this.films;
        }
    },

    created() {
        this.searchResult = this.films;
    }
}
</script>