<template>
  
    <div class="textarea_area">
        <label for="description_activity">{{label}}</label>
        <textarea id="description_activity" v-model="textareaValue"></textarea>
    </div>
  
</template>

<script>

export default {
    components: {},
    data() {
        return {
            textareaValue: '',
        };
    },
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: 'Моё текстовое поле',
        },
    },
    watch: {
        modelValue: {
            handler (){
                this.textareaValue = this.modelValue;
            },
            immediate: true,  
        },
        textareaValue: {
            handler () {
                this.$emit('update:modelValue', this.textareaValue);
            }
        },
    },
}
 
</script>

<style scoped>
.textarea_area {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin-top: 5px;
}
textarea {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  padding-left: 7px;
}

</style>