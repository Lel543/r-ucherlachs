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
        <v-badge
          :content="totalItems"
          color="red"
          overlap
          v-if="totalItems > 0"
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { totalItems } from '@/services/cartStore.js'
</script>

<style scoped>
.text-white {
  color: white !important;
}
</style>