<template>
  <a-descriptions bordered :column="{ xl: 1, xs: 1 }">
    <a-descriptions-item label="Nombre">
      {{ project.name }}
    </a-descriptions-item>
    <a-descriptions-item label="Descripción">
      {{ project.description }}
    </a-descriptions-item>
    <a-descriptions-item label="Visor geografico">
      <a-button
        type="primary"
        @click="$router.push(`/projects/${project.id}/portal`)"
      >
        Ingresar al visor geográfico
      </a-button>
    </a-descriptions-item>
  </a-descriptions>
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
