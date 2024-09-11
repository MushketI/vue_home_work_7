//Створіть базову власну директиву, яка змінює колір тексту елемента, на якому
вона використовується.
<template>
  <div>
    <h2 v-color>Hello igor</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  directives: {
    color: {
      // определение директивы
      mounted(el) {
        el.style.color = "red"
      },
    },
  },
}
</script>
<style></style>
