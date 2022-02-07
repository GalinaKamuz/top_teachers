<template>

    <div>
        <button class="btn pointer">
         <img :src="getImage(src)"/>
         {{label}}
        </button>
    </div>
  
</template>

<script>

export default {
    props: {
        src: String,
        label: {
            type: String,
            default: '',
        },
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
  width: 100%;
  vertical-align: middle;
}
.btn {
  margin-right: 30px;
  height: 30px;
  width: 30px;
  background: #F38195;
  border-radius: 15px;
  position: relative;
}
button {
  border: none;
  color: blueviolet;
}
button.pointer {
  cursor: pointer;
}

</style>