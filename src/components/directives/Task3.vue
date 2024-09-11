//Створіть власну директиву для відображення тултипа при наведенні миші.
<template>
  <div>
    <h2 v-isTooltip>Tooltip</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  directives: {
    isTooltip: {
      mounted(el) {
        el.title = "I am Tooltip"
      },
    },
  },
}
</script>
<style></style>
