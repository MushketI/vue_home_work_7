<template>
  <div class="w-6/12 mx-auto bg-slate-300">
    <div>
      <h1>Slots:</h1>
      <Task1>
        <p>Hello world</p>
      </Task1>
      <Task2>
        <template v-slot:header>
          <p>Header</p>
        </template>
        <template v-slot:content>
          <p>Content</p>
        </template>
      </Task2>
      <Task3></Task3>
      <Task4>
        <template v-slot:default="slotProps">
          <ul>
            <li v-for="item in slotProps.items" :key="item">{{ item }}</li>
          </ul>
        </template>
      </Task4>
      <div class="Task5">
        <button @click="showModal = true">Open Modal</button>
        <Task5 :isVisible="showModal" @close="showModal = false">
          <template v-slot:header>
            <h2>header</h2>
          </template>
          <template v-slot:body>
            <p>body</p>
          </template>
          <template v-slot:footer>
            <button @click="showModal = false">Cancel</button>
            <button @click="confirmAction">Confirm</button>
          </template>
        </Task5>
      </div>
    </div>
    <div>
      <h1>Mixins:</h1>
      <MainMixins />
    </div>
    <div>
      <h1>directives:</h1>
      <MainDirectives />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Task1 from "./components/slots/Task1.vue"
import Task2 from "./components/slots/Task2.vue"
import Task3 from "./components/slots/Task3.vue"
import Task4 from "./components/slots/Task4.vue"
import Task5 from "./components/slots/Task5.vue"
import MainMixins from "./components/mixins/MainMixins.vue"
import MainDirectives from "./components/directives/MainDirectives.vue"

const showModal = ref(false)

const confirmAction = () => {
  console.log("Action confirmed")
  showModal.value = false
}
</script>

<style scoped></style>
