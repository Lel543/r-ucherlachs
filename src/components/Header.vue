<template>
  <header>
    <nav>
      <div class="nav-links">
        <ul class="nav-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/bestellen">Bestellen</router-link></li>
          <li><router-link to="/about">Über</router-link></li>
        </ul>
      </div>
      <div class="cart">
        <span id="price">0,00 EUR</span>
        <router-link to="/cart">
          <img src="../../public/img/cart.svg" alt="Cart">
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>