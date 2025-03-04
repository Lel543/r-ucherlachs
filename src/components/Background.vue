<template>
    <div class="background">
      <h1 class="background-h1">Willkommen!</h1>
      <img class="background-img" src="../../public/img/Background_edit.png" alt="Welcome">
      <button id="scroll-down-btn" class="scroll-down-btn" @click="scrollDown">▼</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Background',
    methods: {
      scrollDown() {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  };
  </script>
  
  <style scoped>
 
  </style>