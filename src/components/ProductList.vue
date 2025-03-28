<template>
  <h1 class="Montserrat-SemiBold-Heading">Bestellen</h1>
  <v-row>
    <v-col cols="6" v-for="product in products" :key="product.id">
      <v-card class="mx-auto my-12" max-width="374">
        <v-img :src="product.image" height="200"></v-img>

        <v-card-item>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>
            Herkunft: {{ product.origin }}
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <div>{{ product.description }}</div>
          <div class="mt-2 font-weight-bold">Preis: {{ product.price }}€</div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-actions>
          <v-btn color="deep-purple-lighten-2" block @click="addToCart(product)">
            Zum Warenkorb hinzufügen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <v-snackbar v-model="snackbar" :timeout="3000" top>
    {{ snackbarMessage }}
  </v-snackbar>
</template>

<script setup>
import { ref } from 'vue'
import { addToCart } from '@/services/cartStore.js'


// Beispielprodukte
const products = ref([
  {
    id: 1,
    name: 'Räucherlachs',
    origin: 'Norwegen',
    description: 'Frischer Räucherlachs aus Norwegen.',
    price: 30,
    image: '../../public/img/lachs_whitebg.jpg',
  },
  {
    id: 2,
    name: 'Wildlachs',
    origin: 'Alaska',
    description: 'Wildlachs aus den Gewässern Alaskas.',
    price: 50,
    image: '../../public/img/lachs_whitebg.jpg',
  },
])

function addToCartWithNotification(product) {
  addToCart(product)
  snackbarMessage.value = `${product.name} wurde zum Warenkorb hinzugefügt!`
  snackbar.value = true
}
</script>