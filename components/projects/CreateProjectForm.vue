<template>
  <a-form-model
    ref="form"
    :model="form"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
  >
    <a-form-model-item label="Nombre" prop="name">
      <a-input
        v-model="form.name"
        type="text"
        placeholder="Ingrese el nombre del proyecto"
      />
    </a-form-model-item>
    <a-form-model-item label="Descripción" prop="description">
      <a-input
        v-model="form.description"
        type="textarea"
        placeholder="Ingrese la descripción del proyecto"
      />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 16, offset: 8 }">
      <a-button type="primary"> Crear proyecto </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        description: '',
      },
    }
  },
}
</script>

<style></style>
