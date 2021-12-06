<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    @submit.prevent="submit"
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
      <a-button type="primary" html-type="submit" :loading="isLoading">
        Crear proyecto
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isLoading: false,
      form: {
        name: '',
        description: '',
      },
      rules: {
        name: [{ required: true, message: 'Ingrese el nombre del proyecto' }],
        description: [
          { required: true, message: 'Ingrese la descripción del proyecto' },
        ],
      },
    }
  },
  methods: {
    ...mapActions(['createProject']),
    async submit() {
      this.$refs.ruleForm.validate(async (isValid) => {
        if (isValid) {
          try {
            this.isLoading = true
            await this.createProject(this.form)
            this.$message.success('La operación se realizó con éxito')
            this.$router.push('/projects')
          } catch (error) {
            this.$message.error(error.message)
          } finally {
            this.isLoading = false
          }
        }
      })
    },
  },
}

//amplify pull --appId dnynzxfi026n2 --envName staging
// import { DataStore } from '@aws-amplify/datastore';
// import { Project } from './models';
// Copy
// ...
// /* Models in DataStore are immutable. To update a record you must use the copyOf function
//  to apply updates to the item’s fields rather than mutating the instance directly */
// await DataStore.save(Project.copyOf(CURRENT_ITEM, item => {
//     // Update the values on {item} variable to update DataStore entry
// }));

// import { DataStore } from '@aws-amplify/datastore';
// import { Project } from './models';
// const models = await DataStore.query(Project);
// console.log(models);

// import { DataStore } from '@aws-amplify/datastore';
// import { Project } from './models';
// const modelToDelete = await DataStore.query(Project, 123456789);
// DataStore.delete(modelToDelete);
</script>
