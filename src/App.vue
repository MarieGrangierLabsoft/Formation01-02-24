<template>
  <div>
    <LoginForm title="Authentification" />
    <SearchFilm />
  </div> 
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import SearchFilm from './components/SearchFilm.vue';

export default {
  name: 'App',
  components: {
    LoginForm,
    SearchFilm
  }
}
</script>

<style>
  @import './assets/base.css';
</style>
