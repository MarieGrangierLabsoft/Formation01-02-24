
<template>
    <div class="container">
      
      <button @click="fetchData">Fetch Data</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'axiosComponent',
    
    methods: {
      
      fetchData() {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add some styling if needed */
  </style>
  