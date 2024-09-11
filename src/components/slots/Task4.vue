//Реалізуйте компонент, який передає дані назад у батьківський компонент через
scoped slot.
<template>
  <div>
    <slot :items="items"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ["Apple", "Banana", "Cherry"],
    }
  },
}
</script>
<style></style>
