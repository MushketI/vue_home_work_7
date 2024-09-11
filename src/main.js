import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { globalMixin } from "./mixins/mixinGlobal"

//Створіть глобальний міксін і додайте його глобально в вашому основному файлі main.js або main.ts.
//Розробіть директиву, яка дозволяє зробити елемент перетягуваним.
//Реєструйте вашу власну директиву глобально, щоб вона була доступна в усьому додатку.

const app = createApp(App)
app.mixin(globalMixin)

app.directive("draggable", {
  mounted(el, binding) {
    el.setAttribute("draggable", true)

    el.addEventListener("dragstart", (event) => {
      event.target.style.opacity = 0.5

      if (binding.value) {
        event.dataTransfer.setData("text", JSON.stringify(binding.value))
      }
    })

    el.addEventListener("dragend", (event) => {
      event.target.style.opacity = ""
    })
  },
})

app.mount("#app")
