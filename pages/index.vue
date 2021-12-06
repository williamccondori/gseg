<template>
  <div>
    <a-card>
      <CreateProjectForm />
    </a-card>
  </div>
</template>

<script>
import CreateProjectForm from '~/components/projects/CreateProjectForm.vue'

export default {
  components: {
    CreateProjectForm,
  },
}
</script>
