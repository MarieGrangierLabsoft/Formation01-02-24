<template>
    <div>
        <button @click="fetchData">Get All Movies</button>
    </div>
</template>
    
<script>
import axios from 'axios';
export default {
    methods: {
        fetchData() {
            // Utilisation d'Axios pour effectuer une requête GET
            axios.get('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzM2NjQ4MmY2N2QxMWM2NWQxM2U5ZWRjMDhiYTk4NyIsInN1YiI6IjY1MjNkY2EzYWI1ZTM0MDBlMWQ0OGQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KaSFEkg-YIMxh95PyXcWPd2opp7AITsdUj_r8daUMN4`, // Add the Bearer token here
            },
        })
            .then(response => {
                console.log("test");
                this.$store.commit('chargeFilms', response.data.results);
            });
        },
    },
    created(){
        this.fetchData();
    }
};
</script>