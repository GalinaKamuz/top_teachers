<template>
  <div>
    <h1>Добавить пост</h1>

      <div class="formArea">

        <my-input label="Заголовок поста" v-model="titlePost"/>

        <my-input label="URL изображения к посту" v-model="imageUrl"/>
        
        <my-textarea label="Текст поста" v-model="descriptionPost"/>

        <span>Выберите категорию поста</span>

        <my-select 
          :optionsSelected="selectedOptions" 
          v-model:modelValueSelected="selectedNames" 
          :value="selectedOptions" />

        <my-submit label="Добавить" @click="onAdd" />

      </div>
      
  </div>
</template>

<script>

export default {
  components: {
   
  },
  data () {
    return {
      shownDialog: false,
      titlePost: '',
      descriptionPost: '',
      selectedNames: '',
      selectedOptions: ['Делюсь опытом', 'Нужен совет', 'Проблемная ситуация', 'Мероприятие'],
      imageUrl: '',
    };
  },
  methods: {
    onAdd() {
      this.$store.dispatch("posts/createPost", 
        { title: this.titlePost, 
          body: this.descriptionPost, 
          category: this.selectedNames,
          author: this.getUserName(),
          time: this.printDate(),
          image: this.imageUrl});
      this.$router.push("/posts");
    },
    onUpdate () {
      this.$store.dispatch("posts/updatePost", 
        { id: 1, 
          title: this.titlePost, 
          body: this.descriptionPost, 
          category: this.selectedNames, 
          author: this.getUserName(),
          time: this.printDate(),
          image: this.imageUrl});
      this.$router.push("/posts");
    },
    showDialog() {
      this.$refs.dialog.show();
    },
    getUserName() {
      const author = this.$store.getters['user/userName'];
      return author;
    },
    printDate() {
      return new Date().toLocaleString();
    },
  },
}
</script>

<style scoped>
h1 {
  margin-top: 30px;
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  color: #434343;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
  position:relative;
}    
h1:after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 20%;
  height: 1px;
  margin-left: -10%;
  background:#F33D5D;
}
.formArea {
  display: flex;
  flex-direction: column;
  margin: 15px 70px;
}
span {
  margin-bottom: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin-top: 5px;
}
label {
  margin-bottom: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin-top: 5px;
}
input {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin-left: 30px;
}
img {
  width: 30%;
  align-self: center;
}

@media (max-width: 680px) {
.formArea {
  margin: 0 10px;
}
}
</style>
