<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4 elevation-2">
          <v-card-title class="text-h5 font-weight-bold">Warenkorb</v-card-title>
          <v-divider></v-divider>

          <v-row v-if="cart.length > 0" class="mt-4">
            <v-col cols="12" v-for="(item, index) in cart" :key="item.id">
              <v-card class="mb-4">
                <v-row align="center">
                  <v-col cols="4">
                    <v-img :src="item.image" max-height="100" max-width="100" class="rounded"></v-img>
                  </v-col>
                  <v-col cols="4">
                    <div class="text-h6">{{ item.name }}</div>
                    <div class="text-subtitle-2">Preis: {{ item.price }}€</div>
                  </v-col>
                  <v-col cols="4" class="d-flex align-center justify-end">
                    <v-btn icon @click="decreaseQuantity(index)" :disabled="item.quantity <= 1">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <span class="mx-2">{{ item.quantity }}</span>
                    <v-btn icon @click="increaseQuantity(index)">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn icon color="red" @click="removeFromCart(index)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <v-row v-else class="mt-4">
            <v-col cols="12" class="text-center">
              <div class="text-h6">Ihr Warenkorb ist leer.</div>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row class="mt-4">
            <v-col cols="6">
              <div class="text-h6 font-weight-bold">Gesamtpreis:</div>
            </v-col>
            <v-col cols="6" class="text-right">
              <div class="text-h6 font-weight-bold">{{ totalPrice }}€</div>
            </v-col>
          </v-row>

          <v-row class="mt-4">
            <v-col cols="12" class="text-right">
              <v-btn color="deep-purple" dark :disabled="cart.length === 0">
                <a href="bestellen.html" class="text-decoration-none text-white">Weiter zur Bestellung</a>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { cart, totalPrice, increaseQuantity, decreaseQuantity, removeFromCart } from '@/services/cartStore.js'
</script>

<style scoped>
.text-h6 {
  font-size: 1.25rem;
}
.text-subtitle-2 {
  font-size: 0.875rem;
  color: gray;
}
</style>