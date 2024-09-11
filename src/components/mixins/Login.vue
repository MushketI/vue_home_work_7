<template>
  <div>
    <form @submit.prevent="validateForm()">
      <input
        :value="inputForm"
        @input="(event) => (inputForm = event.target.value)"
        type="text"
      />
      <button>Save</button>
      <div v-if="errorForm">
        {{ errorForm }}
      </div>
    </form>
  </div>
</template>
<script>
import { validateMixin } from "../../mixins/mixinValidate"
export default {
  data() {
    return {}
  },
  mixins: [validateMixin],
}
</script>
<style></style>
