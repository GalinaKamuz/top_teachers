<template>
    <div class="checkboxArea">
        <div v-for="item in optionsChecked" :key="item">
        <input type="checkbox" :id="item" :value="item" v-model="checkedValue" />
        <label :for="item">{{item}}</label>
    </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            checkedValue: [],
        }
    },
    props: {
        modelValueChecked: {
            type: Array,
        },
        optionsChecked: {
            type: Array,
        },
        value: {
            type: Array,
        },
    },
    watch: {
        checkedValue: {
            handler () {
                this.$emit('update:modelValueChecked', this.checkedValue);
            }
        },
        modelValueChecked: {
            handler () {
                this.checkedValue = this.modelValueChecked;
            } 
        }, 
    },
    created () {
        //this.inputValue = this.modelValue;
    },
}
 
</script>

<style scoped>
.checkboxArea {
    margin-left: 30px;
    margin-bottom: 15px;
}
label {
  margin-bottom: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin-top: 8px;
}
input {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  padding-left: 7px;
  }

</style>