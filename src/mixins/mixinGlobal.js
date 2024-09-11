export const globalMixin = {
  created() {
    this.HelloMixin()
  },

  methods: {
    HelloMixin() {
      console.log("Hello, i am global mixin")
    },
  },
}
