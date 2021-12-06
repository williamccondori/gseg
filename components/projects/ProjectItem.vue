<template>
  <a-card :title="project.name">
    <p>{{ project.description }}</p>
    <div class="to-right">
      <a-button @click="$router.push(`/projects/${project.id}`)">
        <a-icon type="eye" />
        Seleccionar
      </a-button>
    </div>
  </a-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>
