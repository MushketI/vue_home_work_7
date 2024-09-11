//Розробіть міксін, який додає валідацію для форми в компоненті.

export const validateMixin = {
  data() {
    return {
      errorForm: "",
      inputForm: "",
    }
  },
  methods: {
    validateForm() {
      console.log("Mixin Validate")
      if (this.inputForm) {
        console.log("good")
      } else {
        this.errorForm = "Error"
      }
    },
  },
}
