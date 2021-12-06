<template>
  <a-card :title="project.name">
    {{ project.description }}
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

<style></style>
