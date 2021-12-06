<template>
  <a-space direction="vertical" size="large" class="page">
    <a-page-header
      title="Nuevo proyecto"
      class="page__header"
      @back="$router.back()"
    />
    <CreateProjectForm />
  </a-space>
</template>

<script>
import CreateProjectForm from '~/components/projects/CreateProjectForm.vue'

export default {
  components: {
    CreateProjectForm,
  },
}
</script>
