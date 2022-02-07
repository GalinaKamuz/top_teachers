<template>
  <div data-vue-component="Header" class="header">
      <Navigation />
      <Profile />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Profile from '@/components/Profile.vue';

export default {
    name: "Header",
    components: {
        Navigation,
        Profile,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
   padding: 0 10px;
   display: flex;
   flex-direction: column;
   background: #F3F3F3;
}
</style>
