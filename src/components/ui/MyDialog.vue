<template>
  <div v-if="shown">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="shown = false">
        <div class="modal-container" @click.stop>

          <div class="modal-header">
            <slot name="header">
            default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            
              <button class="modal-default-button" @click="shown = false">
              Отмена
              </button>
              <button class="modal-default-button" @click="onOkClick">
              Ок
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>

export default {
    data () {
      return {
        shown: false,
      };
    },
    methods: {
      show () {
        this.shown = true;
      },
      onOkClick () {
        this.$emit('okClick');
        this.shown = false;
      }
    }
}
 
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  margin-left: 20px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-footer {
  min-height: 20px;
}

</style>