<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-container">
      <div class="modal-header">
        <slot name="header">Default Header</slot>
      </div>

      <div class="modal-body">
        <slot name="body">Default Body</slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          <button @click="closeModal">Close</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close")
    },
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
}

.modal-header,
.modal-body,
.modal-footer {
  margin-bottom: 10px;
}
</style>
