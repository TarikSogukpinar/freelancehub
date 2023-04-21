
<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>

import Navbar from './components/NavbarSection.vue'
import Footer from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }

}
</script>

<style></style>
