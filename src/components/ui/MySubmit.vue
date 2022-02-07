<template>

    <div class="btn">
        <button type="submit">{{label}}</button>
    </div>
  
</template>

<script>

export default {
    props: {
        label: {
            type: String,
            default: 'Моя кнопка для форм',
        },
    },
}
 
</script>

<style scoped>
.btn {
  margin: 15px; 
  display: flex;
  justify-content: center;
}
button {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  background: #F3F3F3;
  height: 50px;
  width: 200px;
  border: none;
  border-bottom: 1px solid #F33D5D;
  }
button:hover {
  transition: 0.1s;
  box-shadow: 0px 3px 3px #f38196a8;
}

</style>