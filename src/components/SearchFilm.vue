<template>
    <div id="search-film" v-if="isLogged">
        <button class="deconnection" v-on:click="deconnect">Loggout</button>
        <form v-on:submit.prevent="">
            <label for="search">Rechercher :</label>
            <input id="search" type="text" v-model.lazy="searchInput">
        </form>
        <p>Il y a {{ this.numberResults }} film correspondant à votre recherche</p>
        <ul class="films">
            <li class="film card" v-for="(thisFilm, index) in searchResult" :key="index">

                <img class="poster" :src=thisFilm.poster />
                <p class="title">
                    {{ thisFilm.title }}
                    <span class="rating">{{ getScore(thisFilm.metascore) }}</span>
                </p>
                <dl>
                    <dt>Release date</dt>
                    <dd>{{ thisFilm.released }}</dd>
                    <dt>Director</dt>
                    <dd>{{ thisFilm.director }}</dd>
                    <dt>Actors</dt>
                    <dd>{{ thisFilm.actors }}</dd>
                </dl>
                <p class="plot">
                    {{ thisFilm.plot }}
                </p>
            </li>
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
            //logg: doLoggedIn()
        }
    },

    computed: {
        ...mapState(['isLogged'])
    },

    methods: {
        getScore(thisMetascore) {
            if (thisMetascore < 20) return "";
            else if (thisMetascore < 40) return "★";
            else if (thisMetascore < 60) return "★★";
            else if (thisMetascore < 80) return "★★★";
            else if (thisMetascore < 100) return "★★★★";
            else if (thisMetascore == 100) return "★★★★★";
        },
        deconnect(){
            this.$store.commit('changeLogg');
        },
        getSearchResult(){
            this.searchResult = [];
            let allMovies = this.$store.state.films;
            allMovies.forEach(element => {
                if(element.title === this.searchInput) this.searchResult.push(element);
            });
            this.numberResults = this.searchResult.length;
        }
    },

    watch: {
        searchInput(){
            console.log("Start search");
            this.getSearchResult();
        }
    }
}
</script>