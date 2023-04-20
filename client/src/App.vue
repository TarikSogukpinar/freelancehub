
<template>
  <div>
    <NavbarMenu />
    <br>
    <FooterSection />
  </div>
</template>

<script>
import NavbarMenu from "@/components/Navbar/NavbarMenu.vue";
import FooterSection from "@/components/Footer/FooterSection.vue";


export default {
  name: 'App',
  components: {
    NavbarMenu,
    FooterSection,

  }
}
</script>

<style></style>
