
<template>
  <v-container>
    <div>
        <!--click stop-->
        <div class="click stop" v-on:click="parentHandlerstop">
            <button v-on:click.stop="childHandlerstop">Click me</button>
        </div>
<hr>
        <!--click once-->
        <div class="click once">
            <button v-on:click.once="eventhandleronce">eventhandleronce</button>
        </div>
<hr>
        <!--click self-->
        <div class="self" v-on:click.self="parentHandlerself">
            <button v-on:click.self="childHandlerself">childHandlerself</button>
        </div>
<hr>
        <!--click capture-->
        <div v-on:click.capture="parentHandlercapture">
            <div v-on:click.capture="childHandlercapture">
                <button v-on:click="secondchildHandlercapture">buttoncapture</button>
            </div>
        </div>
<hr>
        <!--trannsition-->
        <div>
            <button @click="toggleElement">Toggle Element</button>

            <transition name="fade" mode="out-in">
                <p v-if="showElement" >Cet élément apparaît/disparaît avec une transition.</p>
            </transition>
        </div>
<hr>
        <!--keyup-->
        <form> 
            <input v-on:keyup.alt.67="keyupfunction" type="text">
            <button v-on:click.right="keyupfunction">submit</button>
            
        </form>
        <div></div>
    </div>
  </v-container>
  </template>
  
  <script>
  export default {
    name:'ExempleModificateur',
    data() {
        return {
            showElement: false
        };
    },
    methods: {
      //Click stop
      childHandlerstop() {
        console.log('Méthode childHandlerstop exécutée.');
      },
      parentHandlerstop() {
        console.log('Méthode parentHandlerstop exécutée.');
      },

      //click once
      eventhandleronce(){
        console.log('Méthode eventhandleronce exécutée.');
      },

      //click self
      parentHandlerself(){
        console.log('Méthode parentHandlerself exécutée.');
      },
      childHandlerself(){
        console.log('Méthode childHandlerself exécutée.');
      },
      
      //click capture
      parentHandlercapture(){
        console.log('Méthode parentHandlercapture exécutée.');
      },
      childHandlercapture(){
        console.log('Méthode childHandlercapture exécutée.');
      },
      secondchildHandlercapture(){
        console.log('Méthode secondchildHandlercapture exécutée.');
      },

      //transition
      toggleElement() {
        this.showElement = !this.showElement;
      },
      //keyup
      keyupfunction(){
        console.log('Méthode keyupfunction exécutée.');
      }
    }
  };
  </script>
  <style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
  </style>