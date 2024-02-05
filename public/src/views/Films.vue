
<template>
    <div class="FilmsView">
        <h1>Films populaires</h1>
        <ToUseAxios />
        <SearchFilm />
    
</div>
</template>

<script>
  import SearchFilm from '@/components/SearchFilm.vue';
  import ToUseAxios from '@/components/ToUseAxios.vue';

  export default {
    name: 'FilmView',

    components: {
        SearchFilm,
        ToUseAxios
    },
  }
</script>