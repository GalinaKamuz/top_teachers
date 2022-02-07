<template>

    <div>
        <button class="btn pointer">
         <img :src="getImage(src)"/>
        </button>
    </div>
  
</template>

<script>

export default {
    props: {
        src: String,
    },
    methods: {
      getImage(name) {
        return require(`@/assets/${name}`)
      }
    },
}
 
</script>

<style scoped>
img {
  width: 90%;
  vertical-align: middle;
}
.btn {
  margin-left: 30px;
  height: 40px;
  width: 40px;
  background: #F38195;
  border-radius: 20px;
}
button {
  border: none;
}
button.pointer {
      cursor: pointer;
      }
</style>