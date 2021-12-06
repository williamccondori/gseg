<template>
  <a-space direction="vertical" size="large" class="page">
    <a-page-header title="Mis proyectos" class="page__header" />
    <a-button type="primary" @click="$router.push('/projects/create')">
      Nuevo proyecto
    </a-button>
    <ProjectList />
  </a-space>
</template>

<script>
import ProjectList from '~/components/projects/ProjectList.vue'
export default {
  components: { ProjectList },
}
</script>
