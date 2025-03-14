<template>
  <div class="home">
    <Background />
    <div class="container">
      <ProductList />
      <AboutMe />
    </div>
  </div>
</template>

<script>
import Background from './Background.vue'
import ProductList from './ProductList.vue'
import AboutMe from './AboutMe.vue'

export default {
  components: {
    Background,
    ProductList,
    AboutMe,
  },
}
</script>

<style scoped></style>
