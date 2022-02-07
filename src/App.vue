<template>
<div id="wrapper">
    <Header />
    <Main /> 
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>

<style>
#app {
  display: flex;
}
#wrapper {
  margin: 0 auto;
  width: 1400px;
}
</style>
