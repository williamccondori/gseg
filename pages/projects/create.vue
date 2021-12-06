<template>
  <a-space direction="vertical" size="large" class="page">
    <a-page-header title="Nuevo proyecto" @back="$router.back()" />
    <a-card>
      <CreateProjectForm />
    </a-card>
  </a-space>
</template>

<script>
import CreateProjectForm from '~/components/projects/CreateProjectForm.vue'

export default {
  components: {
    CreateProjectForm,
  },
  data() {
    return {}
  },
}
</script>

<style>
.page {
  width: 100%;
}
</style>
