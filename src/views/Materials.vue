<template>
  <div class="materials">
    <div class="addbutton">

      <my-submit 
        v-if="$store.getters['user/isAuth']"
        label="Добавить материалы" 
        @click="$router.push('addMaterial')" />

    </div>
    <div
    v-for="material in materialArray"
    :key="material.id"
    >
    
    <div class="materialform">
          <div class="materialimg">
            <img alt="Изображение к материалу" :src="material.image">
          </div>
          <div class="description">
            <div class="titlematerial">
              {{material.title}}
            </div>
            <div class="containerMaterialText">
              <div class="materialtext">
              {{material.body}}
              </div>         
            </div>
            
            <div class="materialinfo">
              <div>
                Формат материала: {{material.format}}
              </div>
              <div>
                {{material.basis}}
              </div>
              <div>
                Целевая аудитория: {{material.areas}}
              </div>
              <div>
                Автор: {{material.author}}
              </div>
            </div>
            <div class="materialinfo">
                Опубликовано: {{material.time}}
            </div>
            <div class="buttonsArea">
                                       
              <div class="row" v-if="checkingAuthor(material.author)">
                <my-button-post src="edit.png" @click="goTo(`/material_edit/${material.id}`)" />
                <my-button-post src="delete.png" @click="showDialog(material.id)" />
              </div>

              <router-link class="details" :to="`/materials/${material.id}`" >Подробнее</router-link>
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


    <!--<h4>{{ $store.getters["materials/count"] }}</h4>-->
  
  </div>
</template>

<script>
export default {
  name: "Materials",
  components: {
  },
   data () {
    return {
      idForDelete: '',
    }
  },
  computed: {
    materialArray() {
      return this.$store.getters["materials/all"];
    },
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    doDelete (id) {
      this.$store.dispatch('materials/deleteMaterial', id);
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
      this.authorMaterial = author;
      if (this.$store.getters['user/userName'] === this.authorMaterial) {
        return true;
      } else {
        return false;
      }
    },
  },
}
</script>

<style scoped>
.materials {
  margin: 0 70px;
}
.addbutton {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.materialform {
  display: flex;
  margin: 50px 0 0 0;
  box-shadow: 0px 5px 10px #e9dada;
}
.materialimg {
  width: 45%;
}
.description {
  width: 55%;
  padding: 0 30px;
}
.titlematerial {
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
.containerMaterialText {
  height: 8em;
}
.materialtext {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: #434343;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  height: 6.5em;
}
.materialinfo {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
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
  .materialform {
  flex-wrap: wrap;
  justify-content: center;
}
.materialimg {
  width: 60%;
}
.description {
  width: 100%;
}
}

@media (max-width: 680px) {
.materials {
  margin: 0 7px;
}
}

</style>