//Розробіть компонент з декількома іменованими слотами та передайте у них різний
контент.
<template>
  <div>
    <slot name="header"></slot>
    <slot name="content"></slot>
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
