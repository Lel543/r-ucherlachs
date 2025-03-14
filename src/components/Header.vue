<template>
  <v-app-bar app color="grey-darken-4">
    <v-container class="d-flex align-center">
      <v-app-bar-title>
        <router-link to="/" class="text-white text-decoration-none"
          >Pauni's Räucherlachs</router-link
        >
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/bestellen">Bestellen</v-btn>
      <v-btn text to="/about">Über</v-btn>
      <v-btn text to="/cart" class="d-flex align-center">
        <span class="mr-2">0,00 EUR</span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.text-white {
  color: white !important;
}
</style>
