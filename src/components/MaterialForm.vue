<template>
  <div class="materialform">
    <div>
      <img alt="Изображение к материалу" src="../assets/png/foto_post_1.png" class="jmg_post">
    </div>
    <div class="description">
      <div class="titlematerial">
        MaterialForm {{$route.params.id}}
      </div>
      <div class="materialtext">
        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько 
        абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить...
      </div>
      <div class="downloadinfo">
        <a alt="ссылка на скачивание материала" href="#">Ссылка на скачивание материала</a>
      </div>
    </div>
  </div>
</template>


<style scoped>
button {
  height: 30px;
  width: 60px;
  text-align: right;
}
.materialform {
  display: flex;
  margin: 50px 70px;
}
.downloadinfo {
  display: flex;
  justify-content: space-around;
}
a {
  text-decoration: none;
}
</style>