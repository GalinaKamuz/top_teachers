<template>
  <div class="postform">
    <div class="postimg">
      <img alt="Изображение к посту" src="../assets/png/foto_post_1.png" class="jmg_post">
    </div>
    <div class="description">
      <div class="titlepost">
        {{editPost?.title}}
      </div>
 
      <div class="posttext">
        {{editPost?.body}}
      </div>

      <div class="posttext">
        {{editPost?.category}}
      </div>
      <div class="postinfo">
        <span>12.09.2021</span>
        <button class="like">12</button>
        <button class="comment">5</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      editPost: null,
    }
  },
  created() {
    const id = this.$route.params.id;
    const postById = this.$store.getters["posts/postById"];
    this.editPost = postById(id);
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
  margin: 50px 70px 0 70px;
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
</style>