<template>
  <v-card>
    <img :src="sitePath+thisFilm.poster_path" />
    <v-card-title>{{ thisFilm.original_title}}</v-card-title>
    <v-card-text>
    {{ thisFilm.overview }}
    </v-card-text>
    <v-card-text>
    {{ thisFilm.vote_average }}
    </v-card-text>
    <v-card-text v-for="(genres, index) in thisFilm.genres" :key="index">
    {{ genres.name }}
    </v-card-text>
    </v-card>
</template>

<script>
import axios from 'axios';
export default {
    name: 'detailComponent',
    data() {
        return {
            thisFilm: [],
            sitePath: "https://image.tmdb.org/t/p/w500/"
        }
    },

    mounted(){
        console.log();
    },

    methods:{
        fetchDataDetails() {
            let thisFilmUrl = "https://api.themoviedb.org/3/movie/"+this.$route.params.id+"?language=fr-FR";
            console.log("ici : "+thisFilmUrl)
            axios.get(thisFilmUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzM2NjQ4MmY2N2QxMWM2NWQxM2U5ZWRjMDhiYTk4NyIsInN1YiI6IjY1MjNkY2EzYWI1ZTM0MDBlMWQ0OGQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KaSFEkg-YIMxh95PyXcWPd2opp7AITsdUj_r8daUMN4`, // Add the Bearer token here
            },
        })
            .then(response => {
                this.thisFilm = response.data;
                console.log(response.data)
            });
        },
    },

    created(){
        this.fetchDataDetails();
    }
}
</script>