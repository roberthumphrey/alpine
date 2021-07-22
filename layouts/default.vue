<template>
  <div>
    <Nav />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  components: {
    Nav
  }
}
</script>

<style>
  html, body {
    height: 100%;
    background: #F5F9FC;
  }
</style>
