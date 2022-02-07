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
    <MaterialForm />
    <div class="details">
    {{material.title}} | <router-link :to="`/materials/${material.id}`" >Подробнее</router-link>
    </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import MaterialForm from '@/components/MaterialForm.vue';

export default {
  name: "Materials",
  components: {
      MaterialForm,
  },
   data () {
    return {
      materialArray: [
        {
          id: 4,
          title: "Material 4",
        },
        {
          id: 5,
          title: "Material 5",
        },
        {
          id: 6,
          title: "Material 6",
        },
      ],
    };
  }
}
</script>

<style scoped>
.materials {
  margin: 10px 70px;
}
.addbutton {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.details {
  display: flex;
  justify-content: space-around;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  align-items: center;
  color: #F38195;
}
</style>