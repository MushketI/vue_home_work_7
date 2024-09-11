//Розробіть власну директиву, яка приймає параметр і виконує різні дії в
залежності від його значення.
<template>
  <div>
    <h1 v-isView="true">видно</h1>
    <h1 v-isView="false">не видно</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  directives: {
    isView: {
      mounted(el, view) {
        if (view.value) {
          el.style.display = "block"
        } else {
          el.style.display = "none"
        }
      },
    },
  },
}
</script>
<style></style>
