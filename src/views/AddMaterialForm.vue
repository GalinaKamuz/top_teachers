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
  methods: {
    onAdd() {
      this.$store.dispatch("materials/createMaterial", 
        { title: this.titleMaterial, 
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
    onUpdate () {
      this.$store.dispatch("materials/updateMaterial", 
        { id: 1, 
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
    showDialog() {
      this.$refs.dialog.show();
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
</style>
