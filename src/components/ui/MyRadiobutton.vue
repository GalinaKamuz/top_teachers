<template>
    <div class="radioArea">
        <div v-for="item in optionsRadio" :key="item">
        <input type="radio" :id="item" :value="item" v-model="radioValue" />
        <label :for="item">{{item}}</label>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            radioValue: '',
        }
    },
    props: {
        modelValueRadio: {
            type: String,
            default: null,
        },
        optionsRadio: {
            type: Array,
        },
        value: {
            type: Array,
        },
    },
    watch: {
        radioValue: {
            handler () {
                this.$emit('update:modelValueRadio', this.radioValue);
            }
        },
        modelValueRadio: {
            handler () {
                this.radioValue = this.modelValueRadio;
            } 
        }, 
    },
    created () {
        //this.inputValue = this.modelValue;
    },
}
 
</script>

<style scoped>
.radioArea {
    margin-left: 30px;
    margin-bottom: 15px;
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