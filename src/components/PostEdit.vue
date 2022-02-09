<template>
  <div>
    <h1>Редактирование поста</h1>

      <div class="formArea">

        <my-input label="Заголовок поста" v-model="titlePost"/>

        <my-input label="URL изображения к посту" v-model="imageUrl"/>
        
        <my-textarea label="Текст поста" v-model="descriptionPost"/>

        <span>Выберите категорию поста</span>

        <my-select :optionsSelected="selectedOptions" v-model:modelValueSelected="selectedNames" :value="selectedOptions" />
        
        <div class="buttonArea">
          <my-submit label="Сохранить изменения" @click="onUpdate"/>
          <my-submit label="Отмена" @click="showDialog"/>
        </div>
        
        <my-dialog ref="dialog">
      
          <template #header>Изменения НЕ будут сохранены</template>
          <template #body>Вы уверены?</template>
          <template #footer>
            <button @click="$router.push('/posts')">Да</button>
            <button @click="stopDialog">Нет</button>
          </template>
          
        </my-dialog>

      </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      titlePost: "",
      descriptionPost: "",
      selectedNames: "",
      postId: '',
      selectedOptions: ['Делюсь опытом', 'Нужен совет', 'Проблемная ситуация', 'Мероприятие'],
      imageUrl: '',
    };
  },
  created() {
    const id = this.$route.params.id;
    const postById = this.$store.getters["posts/postById"];
    const editPost = postById(id);
    this.postId = editPost?.id;
    this.titlePost = editPost?.title;
    this.descriptionPost = editPost?.body;
    this.selectedNames = editPost?.category;
    this.imageUrl = editPost?.image;
  },
  methods: {
    onUpdate() {
      this.$store.dispatch("posts/updatePost", {
        id: this.postId,
        title: this.titlePost,
        body: this.descriptionPost,
        category: this.selectedNames,
        author: this.getUserName(),
        time: this.printDate(),
        image: this.imageUrl});
      this.$router.push("/posts");
    },
    showDialog(id) {
      this.idForDelete = id;
      this.$refs.dialog.show();
    },
    stopDialog() {
      this.idForDelete = '';
      this.$refs.dialog.shown = false;
    },
    getUserName() {
      const author = this.$store.getters['user/userName'];
      return author;
    },
    printDate() {
      return new Date().toLocaleString();
    },
  },

};
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
.buttonArea {
  display: flex;
  justify-content: center;
}
button {
  height: 30px;
  width: 60px;
  text-align: right;
}
.postform {
  display: flex;
  margin: 50px 0 0 0;
  box-shadow: 0px 5px 10px #e9dada;
}
.postimg {
  margin-right: 30px;
}
.titlepost {
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  color: #434343;
  margin: 20px 0;
}
.posttext {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: #434343;
  margin-bottom: 20px;
}
.postinfo {
  display: flex;
  justify-content: space-around;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  align-items: center;
  color: #F38195;
}
.like {
  background: url('../assets/svg/like.svg') left no-repeat;
}
.comment {
  background: url('../assets/svg/comment.svg') left no-repeat;
}

@media (max-width: 680px) {
.formArea {
  margin: 0 10px;
}
.buttonArea {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
}
</style>