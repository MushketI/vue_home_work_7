Створіть компонент з слотами, які мають фолбек контент, що відображається, якщо
немає переданого контенту.
<template>
  <div>
    <slot>Нет данных</slot>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style></style>
