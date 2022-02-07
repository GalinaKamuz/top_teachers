<template>
  
    <div class="input_area">
      <label for="login">{{label}}</label>
      <input id="login" type="text" v-model="inputValue" />

    </div>
  
</template>

<script>

export default {
    components: {},
    data() {
        return {
            inputValue: '',
        };
    },
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: 'Моё поле ввода',
        },
        type: {
            type: String,
            default: '',
        }
    },
    watch: {
        modelValue: {
            handler (){
                this.inputValue = this.modelValue;
            },
            immediate: true,  
        },
        inputValue: {
            handler () {
                this.$emit('update:modelValue', this.inputValue);
            }
        },
    },
    created () {
        //this.inputValue = this.modelValue;
    },
}
 
</script>

<style scoped>
.input_area {
  display: flex;
  flex-direction: column;
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
  padding-left: 7px;
  }

</style>