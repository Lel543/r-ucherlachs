<template>
  <v-carousel show-arrows="hover" hide-delimiters cycle interval="10000" class="mb-5">
    <v-carousel-item v-for="(item, i) in items" :key="i" :transition="'fade-transition'">
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
