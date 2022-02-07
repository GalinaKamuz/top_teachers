<template>
    <div class="selectArea">
        <select v-model="selectedValue">
        <option disabled value="">Выберите один из вариантов</option>
        <option v-for="item in optionsSelected" :id="item" :key="item" :value="item">
        {{item}}
        </option>
        </select>
    </div>    
</template>

<script>

export default {
    components: {},
    data() {
        return {
            selectedValue: '',
        }
    },
    props: {
        modelValueSelected: {
            type: String,
            default: null,
        },
        optionsSelected: {
            type: Array,
        },
        label: {
            type: String,
            default: 'Мой селект',
        },
    },
    watch: {
        selectedValue: {
            handler () {
                this.$emit('update:modelValueSelected', this.selectedValue);
            }
        },
        modelValueSelected: {
            handler () {
                this.selectedValue = this.modelValueSelected;
            } 
        }, 
    },
    created () {
        //this.inputValue = this.modelValue;
    },
}
 
</script>

<style scoped>
.selectArea {
    margin-left: 30px;
    margin-bottom: 15px;
}
option {
  margin-bottom: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin-top: 5px;
}

</style>