<template>
  <div class="bg-lime-300">{{ HelloMixin }}</div>
  <h1>Validate</h1>
  <Login />
</template>
<script>
import { myMixin } from "../../mixins/mixinExsepl"
import Login from "./Login.vue"

export default {
  data() {
    return {}
  },
  mixins: [myMixin],
  components: {
    Login,
  },
}
</script>
<style></style>
