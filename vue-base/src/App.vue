<script setup>
import { RouterView } from 'vue-router';
import Container from './components/ui/Container.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <Container>
    
    <Nav />

    <RouterView />

    <Footer />
    
  </Container>
</template>
