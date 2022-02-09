<template>
  <div class="postform">
    <div class="titlepost">
        {{editPost?.title}}
      </div>
    <div class="postimg">
      <img alt="Изображение к посту" :src="editPost?.image">
    </div>
    <div class="description">
      
      <div class="posttext">
        {{editPost?.body}}
      </div>

      <div class="subtext">
        <div>
          Категория поста: {{editPost?.category}}
        </div>
        <div>
          Автор: {{editPost?.author}}
        </div>
      </div>
      <div class="postfooter">
        <div class="postinfo">
          Опубликовано: {{editPost?.time}}
        </div>
        <div class="row" v-if="checkingAuthor(editPost?.author)">
          <my-button-post src="edit.png" @click="goTo(`/post_edit/${editPost?.id}`)" />
          <my-button-post src="delete.png" @click="showDialog(editPost?.id)" />
        </div>
      </div>
    </div>

    <my-dialog ref="dialog">
      
      <template #header>Подтвердите удаление</template>
      <template #body>Вы уверены?</template>
      <template #footer>
        <button @click="doDelete(idForDelete)">Да</button>
        <button @click="stopDialog">Нет</button>
      </template>
      
    </my-dialog>

  </div>
</template>


<script>
export default {
  data () {
    return {
      idForDelete: '',
      editPost: null,
    }
  },
  created() {
    const id = this.$route.params.id;
    const postById = this.$store.getters["posts/postById"];
    this.editPost = postById(id);
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    doDelete (id) {
      this.$store.dispatch('posts/deletePost', id);
      this.stopDialog();
      this.$router.push('/');
    },
    showDialog(id) {
      this.idForDelete = id;
      this.$refs.dialog.show();
    },
    stopDialog() {
      this.idForDelete = '';
      this.$refs.dialog.shown = false;
    },
    checkingAuthor(author) {
      this.authorPost = author;
      if (this.$store.getters['user/userName'] === this.authorPost) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
button {
  height: 30px;
  width: 60px;
  text-align: right;
}
.postform {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 70px;
  padding: 0 30px 30px 30px;
  box-shadow: 0px 5px 10px #e9dada;
}
.postimg {
  margin: 20px 0;
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
  margin: 20px 0;
  line-height: 1.3em;
}
.subtext {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: #434343;
  margin: 20px 0;
  line-height: 1.3em;
  display: flex;
  justify-content: space-between;
}
.postfooter {
  display: flex;
  justify-content: space-between;
}
.postinfo {
  display: flex;
  justify-content: space-around;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  align-items: center;
  color: #F38195;
}
.row {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 680px) {
.postform {
  margin: 0 15px;
}
.subtext {
  flex-direction: column;
}
.postinfo {
  margin-bottom: 10px;
}
.postfooter {
  flex-direction: column;
  align-items: flex-start
}
img {
  width: 100%;
}
}
</style>