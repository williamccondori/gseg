<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    @submit.prevent="submit"
  >
    <a-form-model-item prop="username" label="Usuario">
      <a-input v-model="form.username" />
    </a-form-model-item>
    <a-form-model-item prop="password" label="Contraseña">
      <a-input v-model="form.password" type="password" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 16, offset: 8 }">
      <a-button type="primary" html-type="submit" :loading="isLoading">
        Iniciar sesión
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  data() {
    return {
      isLoading: false,
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: 'Por favor ingrese su usuario' }],
        password: [
          { required: true, message: 'Por favor ingrese su contraseña' },
        ],
      },
    }
  },
  methods: {
    async submit() {
      this.$refs.ruleForm.validate(async (isValid) => {
        if (isValid) {
          try {
            this.isLoading = true
            const { username, password } = this.form
            const user = await Auth.signIn(username, password)
            console.log(user)
            this.$router.push('/')
          } catch (error) {
            this.$message.error(error.message)
          } finally {
            this.isLoading = false
          }
        }
      })
    },
  },
}
</script>
