<template>
  <div data-vue-component="Navigation" class="nav">
    <div data-vue-component="Logo">
      <button 
        @click="type = 'btnHome', $router.push('/')" class="logoArea">
        <img alt="logo" src="../assets/logo.png" class="logo">
      </button>      
    </div>
    <div data-vue-component="ButtonsProfile" class="ButtonsProfileArea">
      <div>
      <component :is="shownComponent" />
      </div>
      
        <my-button 
          v-if="!$store.getters['user/isAuth']" 
          @click="type = 'btnAuth'" 
          src="login.png"/>

        <div class="login" v-if="$store.getters['user/isAuth']">{{$store.getters['user/userEmail']}}</div>

        <my-button 
          v-if="$store.getters['user/isAuth']" 
          @click="doLogOut"
          src="logout.png"/>

    </div>
  </div>
</template>

<script>
import Authorization from "@/components/Authorization.vue"

export default {
  components: {
    Authorization,
  },
  data() {
    return {
      type: "btnHome",
    };
  },
  computed: {
    shownComponent() {
      switch (this.type) {
        case "btnAuth":
          return "Authorization";
        default:
          return null;
      }
    },
  },
  methods: {
    doLogOut() {
      if (confirm('Вы точно хотите выйти?')) {
        this.$store.dispatch('user/logOut');
      }
    },
  },
  
};

</script>

<style scoped>
.nav {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 auto;
}
.logoArea {
  background: none;
}
.logo {
  height: 100px;
  cursor: pointer;
}
.ButtonsProfileArea {
  height: 40px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  align-items: center;
}
button {
  border: none;
}
.login {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}

@media (max-width: 1200px) {
  .nav {
  width: 90%;
}
}

@media (max-width: 680px) {
.nav {
  width: 95%;
  flex-wrap: wrap;
  justify-content: center;
}
}
</style>