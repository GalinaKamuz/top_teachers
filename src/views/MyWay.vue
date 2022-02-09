<template>
  <div class="my_way">
    
    <div class="addbutton">
      <my-submit 
      v-if="$store.getters['user/isAuth']"
      label="Добавить пост" 
      @click="$router.push('addpost')" />
    </div>

    <div
    v-for="posts in postArray"
    :key="posts.id"
    >
        <div class="postform">
          <div class="postimg">
            <img alt="Изображение к посту" :src="posts.image">
          </div>
          <div class="description">
            <div class="titlepost">
              {{posts.title}}
            </div>
            <div class="containerPostText">
              <div class="posttext">
              {{posts.body}}
              </div>         
            </div>
            
            <div class="postinfo">
              <div>
                Категория поста: {{posts.category}}
              </div>
              <div>
                Автор: {{posts.author}}
              </div>
            </div>
            <div class="postinfo">
                Опубликовано: {{posts.time}}
            </div>
            <div class="buttonsArea">
              <div class="row">
                <my-button-post src="likes.png"/>
                
                <my-button-post label="" src="comment.png"/>
              </div>
                         
              <div class="row" v-if="checkingAuthor(posts.author)">
                <my-button-post src="edit.png" @click="goTo(`/post_edit/${posts.id}`)" />
                <my-button-post src="delete.png" @click="showDialog(posts.id)" />
              </div>

              <router-link class="details" :to="`/posts/${posts.id}`" >Подробнее</router-link>
            </div>
            
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

   <!--  <router-view/> -->
   
    <h4>{{ $store.getters["posts/count"] }}</h4>

  </div>
</template>

<script>
import MyButtonPost from '../components/ui/MyButtonPost.vue';

export default {
  name: "MyWay",
  data () {
    return {
      idForDelete: '',
    }
  },
  components: {
    MyButtonPost
  
  },
  computed: {
    postArray() {
      return this.$store.getters["posts/all"];
    },
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    doDelete (id) {
      this.$store.dispatch('posts/deletePost', id);
      this.stopDialog();
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
.my_way {
  margin: 0 70px;
}
.addbutton {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.postform {
  display: flex;
  margin: 50px 0 0 0;
  box-shadow: 0px 5px 10px #e9dada;
}
.postimg {
  width: 45%;
}
.description {
  width: 55%;
  padding: 0 30px;
}
.titlepost {
  margin-top: 30px;
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  color: #434343;
  font-weight: 500;
  margin: 20px 0;
  position:relative;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.containerPostText {
  height: 12em;
}
.posttext {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: #434343;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  height: 9em;
}
.postinfo {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  align-items: center;
  color: #434343;
}
.buttonsArea {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.row {
  display: flex;
  flex-wrap: wrap;
}



.details {
  display: flex;
  justify-content: space-around;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  align-items: center;
  color: #F38195;
}

@media (max-width: 1080px) {
  .postform {
  flex-wrap: wrap;
  justify-content: center;
}
.postimg {
  width: 60%;
}
.description {
  width: 100%;
}
}

@media (max-width: 680px) {
.my_way {
  margin: 0 7px;
}
}


</style>