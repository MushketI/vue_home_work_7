//Створіть базовий міксін, який додає декілька методів або даних у компонент.
//Створіть міксін, який включає хуки життєвого циклу для логування повідомлень при створенні та знищенні компоненту.
export const myMixin = {
  created() {
    this.HelloMixin()
    console.log("created mixin")
  },
  unmounted() {
    console.log("unmounted mixin")
  },
  methods: {
    HelloMixin() {
      console.log("Hello, i am mixin")
    },
  },
}
