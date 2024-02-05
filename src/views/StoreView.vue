<template>
    <div class="about">
      <axiosComponent></axiosComponent>
    </div>
  </template>
  
  <script>
  import axiosComponent from '@/components/axiosComponent.vue'
  import firstService from '@/services/FirstService'
  export default {
    name: 'StoreView',
    components: {
        axiosComponent
    },
    mounted(){
      firstService.consolewrite();
    }
  }
  </script>