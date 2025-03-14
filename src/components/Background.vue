<template>
  <v-carousel
    show-arrows="hover"
    delimiter-icon="mdi-fish"
    hide-delimiter-background
    cycle
    interval="10000"
    class="mb-5"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img :src="item.src" cover></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Background',
  data() {
    return {
      items: [{ src: '/img/prod1.JPG' }, { src: '/img/prod2.JPG' }, { src: '/img/prod3.JPG' }],
    }
  },
  methods: {},
}
</script>

<style scoped></style>
