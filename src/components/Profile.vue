<template>
  <div v-if="!$store.getters['user/isAuth']" data-vue-component="Welcome" class="welcome"> 
    <div data-vue-component="Greetings" class="greetings">
      <div class="caption">
        Вступайте в сообщество Top Teachers! <br>Мы Вас ждём!
      </div>
      <div class="description">
        Кто такой "лучший учитель"? <br>
        Это тот, кто постоянно стремится быть лучше! Это тот, кто и сам постоянно обучается, совершенствуется, находится "в ресурсе". 
        Именно в нашем сообществе Вы сможете зарядиться энергией, обсудить волнующие вопросы и смотивировать других единомышленников своими достижениями!
      </div>
    </div> 
    <div>
      <img src="../assets/svg/divide.svg">
    </div>
    <div class="fotoWelcomeArea">
    <img src="../assets/welcome.png" alt="Приветствие" class="fotoWelcome">  
    </div>
  </div>

  <div v-if="$store.getters['user/isAuth']"  data-vue-component="Profile" class="profileArea">
    <div data-vue-component="CardProfile" class="cardProfile">
      <div class="foto">
        <img :src="getUserPhoto()" alt="Фото профиля" class="fotoProfile">
      </div>
      <div class="nameProfile">
        {{$store.getters['user/userName']}}
      </div>
    </div>
    <img src="../assets/svg/divide.svg">
    <div data-vue-component="InfoProfile" class="InfoProfile">
      <div class="caption">
        Приветствуем Вас, {{$store.getters['user/userName']}}, в сообществе <br>Top teachers!
      </div>
      <div class="description">
        Это место, где творческие люди делятся своим опытом в вопросах обучения, обсуждают проблемные ситуации и обязательно находят решения!
        Здесь Вы сможете зарядиться энергией для новых свершений, рассказать о своих достижениях и опубликовать авторские работы. Начните прямо сейчас!
      </div>
    </div>  
  </div>
</template>

<script>
export default {
    name: "Profile",
    components: { 
    },
    data() {
    return {
      type: "btnHome",
    };
  },
  methods: {
    getUserPhoto () {
      return this.$store.getters['user/userFoto'];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profileArea {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 50px;
}
.greetings {
  width: 50%;
  margin-top: 20px;
}
.fotoWelcomeArea {
  width: 40%;
  margin-top: 30px;
}
.fotoWelcome {
  width: 100%;
}
.welcome {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 50px;
}
.cardProfile {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.foto {
  width: 150px;
  height: 150px;
  margin: 10px 40px;
  overflow: hidden;
  border-radius: 50%;
}
.fotoProfile {
  width: auto;
  height: 100%;
  margin: 0 auto;
  background-image: url("../assets/Instagram.png");
}
.nameProfile {
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  color: #434343;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
  position:relative;
}    
.InfoProfile {
  margin-top: 50px;
}
.caption {
  padding: 20px;
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  color: #434343;
  border-left: 1px solid #F33D5D;
  border-bottom: 1px solid #F33D5D;
}
.description {
  padding: 20px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: #434343;
}
</style>