<template>
  <a-result
    title="404"
    status="404"
    sub-title="Lo sentimos, la página que buscas no existe."
  >
    <template #extra>
      <a-button type="primary" @click="$router.back()">
        Regresar a la página anterior
      </a-button>
    </template>
  </a-result>
</template>
