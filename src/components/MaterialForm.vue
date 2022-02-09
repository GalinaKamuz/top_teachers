<template>
  <div class="materialform">
    <div class="titlematerial">
      {{editMaterial?.title}}
    </div>
    <div class="materialimg">
      <img alt="Изображение к материалу" :src="editMaterial?.image">
    </div>
    <div class="description">
            
      <div class="materialtext">
        {{editMaterial?.body}}
      </div>        
            
      <div class="subtext">
        <div>
          Формат материала: {{editMaterial?.format}}
        </div>
        <div>
          {{editMaterial?.basis}}
        </div>
        <div>
          Целевая аудитория: {{editMaterial?.areas}}
        </div>
        <div>
          Автор: {{editMaterial?.author}}
        </div>
        <div>
          Email автора для связи: {{editMaterial?.authorEmail}}
        </div>
        
      </div>

      <div class="materialfooter">
        <div class="materialinfo">
          Опубликовано: {{editMaterial?.time}}
        </div>
        <div class="row" v-if="checkingAuthor(editMaterial?.author)">
          <my-button-post src="edit.png" @click="goTo(`/material_edit/${editMaterial?.id}`)" />
          <my-button-post src="delete.png" @click="showDialog(editMaterial?.id)" />
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
      editMaterial: null,
    }
  },
  created() {
    const id = this.$route.params.id;
    const materialById = this.$store.getters["materials/materialById"];
    this.editMaterial = materialById(id);
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    doDelete (id) {
      this.$store.dispatch('materials/deleteMaterial', id);
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
      this.authorMaterial = author;
      if (this.$store.getters['user/userName'] === this.authorMaterial) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.materialform {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 70px;
  padding: 0 30px 30px 30px;
  box-shadow: 0px 5px 10px #e9dada;
}
.materialimg {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
.titlematerial {
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  color: #434343;
  margin: 20px 0;
}
.materialtext {
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
  flex-direction: column;
}
.materialfooter {
  display: flex;
  justify-content: space-between;
}
.materialinfo {
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
img {
  width: 50%;
  align-self: center;
}

@media (max-width: 680px) {
.materialform {
  margin: 0 15px;
}
.subtext {
  flex-direction: column;
}
.materialinfo {
  margin-bottom: 10px;
}
.materialfooter {
  flex-direction: column;
  align-items: flex-start
}
img {
  width: 100%;
}
}
</style>