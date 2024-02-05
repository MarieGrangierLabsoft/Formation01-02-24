<!-- src/components/Counter.vue -->
<template>
  <div class="counter">
    <h1>Counter: {{ count }}</h1>
    <h1>Counter: {{ isLoogedin }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="login">login/logout</button>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'TestVuex',
  computed: {
    ...mapState(['count']),
    
    
    isLoogedin() {
      return this.$store.state.isLoogedin;
    },
    
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    login() {
      this.$store.commit('login');
    }
  },
};
</script>

<style scoped>
/* Add some styling if needed */
</style>
