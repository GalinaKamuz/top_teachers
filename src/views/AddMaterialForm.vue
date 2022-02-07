<template>
  <div>
    <h1>Добавить авторский материал</h1>
    <form>
      <div class="formArea">
        <my-input label="Название материала" v-model="title"/>
        
        <my-textarea label="Описание материала" v-model="description"/>

        <my-input label="Ссылка на скачивание материала" v-model="downloadlink"/>

        <span>На какой основе предоставляете материал?</span>
        <my-radiobutton :optionsRadio="radioOptions" v-model:modelValueRadio="radioNames" :value="radioOptions" />

        <span>Выберите формат, в котором предоставляете материал</span>
        <my-select :optionsSelected="selectedOptions" v-model:modelValueSelected="selectedNames" :value="selectedOptions" />

        <span>Выберите сферы образования, где будут полезны Ваши материалы</span>
        <my-checkbox :optionsChecked="checkedOptions" v-model:modelValueChecked="checkedNames" :value="checkedOptions" />

        <my-submit label="Добавить" @click="onAdd" />
      </div>
      
    </form>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      title: '',
      description: '',
      downloadlink: '',
      radioNames: '',
      radioOptions: ['Платный материал', 'Бесплатный материал'],
      checkedNames: [],
      checkedOptions: ['Дошкольное учреждение', 'Школа', 'Колледж', 'Высшее учебное заведение', 'Частные курсы'],
      selectedNames: '',
      selectedOptions: ['Текстовый документ', 'Презентация', 'Видео', 'Архив'],
    };
  },
  methods: {
    onAdd () {
      this.$router.push('/materials');
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
</style>
