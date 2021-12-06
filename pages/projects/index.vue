<template>
  <a-space direction="vertical" size="large" class="page">
    <a-button type="primary" @click="$router.push('/projects/create')">
      Nuevo proyecto
    </a-button>
    <a-space />
    <ProjectList />
  </a-space>
</template>

<script>
import ProjectList from '~/components/projects/ProjectList.vue'
export default {
  components: { ProjectList },
}
</script>
