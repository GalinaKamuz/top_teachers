<template>

    <div>
      <a :href="getHref(href)">
          <div>
            <img :src="getImage(src)"/>
          </div>
      </a>
    </div>
  
</template>

<script>

export default {
    props: {
        href: String,
        src: String,
    },
    methods: {
      getHref(href) {
        return (`${href}`)
      },
      getImage(name) {
        return require(`@/assets/${name}`)
      }
    },
}
 
</script>

<style scoped>
img {
  height: 20px;
}
a > div {
  height: 40px;
  width: 40px;
  margin-top: 50px;
  background: #F38195;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>