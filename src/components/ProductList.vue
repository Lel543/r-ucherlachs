<template>
  <div>
    <div class="row mt-1">
      <div class="twelve columns">
        <h1 class="Montserrat-SemiBold-Heading">Bestellen</h1>
      </div>
    </div>
    <v-divider thickness="2"></v-divider>
    <Toast />
    <div class="row">
      <div class="six columns">
        <figure class="offers">
          <img src="../../public/img/lachs_whitebg.jpg" alt="Beschreibung von Bild 1" width="400" />
          <p class="Meera-Regular font-italic text-h4">500g Norwegischer Lachs</p>
          <figcaption class="product-price">30€</figcaption>
          <v-btn
            class="ma-3 Cabin-Regural"
            @click="addToCart('500g Norwegischer Lachs')"
            color="grey-darken-4"
            size="large"
          >
            Jetzt bestellen! <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
          </v-btn>
        </figure>
      </div>
      <div class="six columns">
        <figure class="offers">
          <img src="../../public/img/lachs_whitebg.jpg" alt="Beschreibung von Bild 1" width="400" />
          <p class="Meera-Regular font-italic text-h4">1000g Norwegischer Lachs</p>
          <figcaption class="product-price">50€</figcaption>
          <v-btn
            class="ma-3 Cabin-Regural"
            @click="addToCart('1000g Norwegischer Lachs')"
            color="grey-darken-4"
            size="large"
          >
            Jetzt bestellen! <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
          </v-btn>
        </figure>
      </div>
    </div>
    <v-divider thickness="2"></v-divider>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
}
</script>

<style scoped></style>
