<template>
  <div data-vue-component="Main" class="main">
    <div id="tablist" class="tablist">
      <button 
        :class="{active: activePath === '/posts'}" 
        @click="$router.push('/posts')">
        Путь учителя
      </button>
      
      <button 
        :class="{active: activePath === '/materials'}" 
        @click="$router.push('/materials')">
        Авторские материалы
      </button>
      
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Main",
  data () {
    return {
      activePath: '/',
    };
  },
  watch: {
    $route() {
      this.activePath = this.$route.path;
      this.isPathMaterials = this.activePath === '/materials';
      this.AboutClass = this.isPathMaterials ? 'active' : '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tablist {
  display: flex;
  justify-content: space-around;
  margin: 0 70px;
}
button {
  margin-top: -15px;
  height: 70px;
  width: 250px;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  color: #434343;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background: #FFFFFF;
  border: #FFFFFF;
  box-shadow: 0px 3px 3px #e9dada;
  transition: 0.2s;
}
button:hover {
  transition: 0.2s;
  box-shadow: 0px 3px 3px #f38196a8;
}
.active {
  box-shadow: 0px 3px 3px #f38196a8;
}
</style>