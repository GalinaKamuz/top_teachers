<template>
  <div>
    <h1>Добавить авторский материал</h1>
    
      <div class="formArea">
        <my-input label="Название материала" v-model="titleMaterial"/>

        <my-input label="URL изображения к посту" v-model="imageUrl"/>
        
        <my-textarea label="Описание материала" v-model="descriptionMaterial"/>

        <my-input label="Ссылка на скачивание материала" v-model="downloadlinkMaterial"/>

        <span>На какой основе предоставляете материал?</span>
        <my-radiobutton 
          :optionsRadio="radioOptions" 
          v-model:modelValueRadio="radioNames" 
          :value="radioOptions" />

        <span>Выберите формат, в котором предоставляете материал</span>
        <my-select 
          :optionsSelected="selectedOptions" 
          v-model:modelValueSelected="selectedNames" 
          :value="selectedOptions" />

        <span>Выберите сферы образования, где будут полезны Ваши материалы</span>
        <my-checkbox 
          :optionsChecked="checkedOptions" 
          v-model:modelValueChecked="checkedNames" 
          :value="checkedOptions" />

        <div class="buttonArea">
          <my-submit label="Сохранить изменения" @click="onUpdate"/>
          <my-submit label="Отмена" @click="showDialog"/>
        </div>
        
        <my-dialog ref="dialog">
      
          <template #header>Изменения НЕ будут сохранены</template>
          <template #body>Вы уверены?</template>
          <template #footer>
            <button @click="$router.push('/materials')">Да</button>
            <button @click="stopDialog">Нет</button>
          </template>
          
        </my-dialog>
      </div>
      
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      titleMaterial: '',
      descriptionMaterial: '',
      downloadlinkMaterial: '',
      radioNames: '',
      radioOptions: ['Платный материал', 'Бесплатный материал'],
      checkedNames: [],
      checkedOptions: ['Дошкольное учреждение', 'Школа', 'Колледж', 'Высшее учебное заведение', 'Частные курсы'],
      selectedNames: '',
      selectedOptions: ['Текстовый документ', 'Презентация', 'Видео', 'Архив'],
      imageUrl: '',
    };
  },
  created() {
    const id = this.$route.params.id;
    const materialById = this.$store.getters["materials/materialById"];
    const editMaterial = materialById(id);
    this.materialId = editMaterial?.id;
    this.titleMaterial = editMaterial?.title;
    this.descriptionMaterial = editMaterial?.body;
    this.downloadlinkMaterial = editMaterial?.download;
    this.radioNames = editMaterial?.basis;
    this.selectedNames = editMaterial?.format;
    this.checkedNames = editMaterial?.areas;
    this.imageUrl = editMaterial?.image;
  },
  methods: {
    onUpdate () {
      this.$store.dispatch("materials/updateMaterial", 
        { id: this.materialId, 
          title: this.titleMaterial, 
          body: this.descriptionMaterial, 
          download: this.downloadlinkMaterial, 
          basis: this.radioNames,
          format: this.selectedNames,
          areas: this.checkedNames,
          author: this.getUserName(),
          authorEmail: this.getUserEmail(),
          time: this.printDate(),
          image: this.imageUrl});
      this.$router.push("/materials");
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
    getUserEmail() {
      const authorEmail = this.$store.getters['user/userEmail'];
      return authorEmail;
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
