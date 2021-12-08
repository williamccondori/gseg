<template>
  <div class="auth">
    <a-card>
      <SignInForm />
    </a-card>
  </div>
</template>

<script>
import SignInForm from '~/components/auth/SignInForm.vue'
export default {
  components: {
    SignInForm,
  },
  layout: 'auth',
}
</script>

<style scoped>
.auth {
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem;

  align-items: center;
  justify-content: center;
}
</style>
