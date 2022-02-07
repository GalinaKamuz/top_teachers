<template>
  <div v-if="!$store.getters['user/isAuth']" class="form_auth">
    <my-submit label="Продолжить через Google" @click="signInWithGoogle" />
  </div>
</template>

<script>
import { 
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider
} from "firebase/auth";

export default {
  components: {

  },
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    onAuthClick() {
      this.$store.dispatch("user/doAuth", {
        login: this.login,
        password: this.password,
      }).then((status) => {
        if (status === 'Ok') {
          this.$router.push('/');
        } else if (status !== 'Ok') {
          alert('Ошибка авторизации');
        }
      });
    },
    signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
      .then((status) => {
        if (status === 'Ok') {
          this.$router.push('/');
        } 
      });
    },
  },
}
 
</script>

<style scoped>
.form_auth {
 display: flex;
 flex-direction: column;
}
.title_form {
  margin: 10px 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
  color: #434343;
  text-align: center;
  padding: 10px 0;
  position:relative;
}    
.title_form:after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 70%;
  width: 40%;
  height: 1px;
  margin-left: -40%;
  background:#F33D5D;
}
</style>