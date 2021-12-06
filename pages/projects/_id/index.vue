<template>
  <section v-if="project">
    <a-space direction="vertical" size="large" class="page">
      <a-page-header
        :title="project.name"
        class="page__header"
        @back="$router.back()"
      />
      <ProjectDescription :project="project" />
    </a-space>
  </section>
  <section v-else>
    <NotFound />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NotFound from '~/components/NotFound.vue'
import ProjectDescription from '~/components/projects/ProjectDescription.vue'
export default {
  components: { ProjectDescription, NotFound },
  async fetch() {
    try {
      await this.fetchProject(this.$route.params.id)
    } catch (error) {
      this.$message.error(error.message)
    }
  },
  computed: {
    ...mapState(['project']),
  },
  methods: {
    ...mapActions(['fetchProject']),
  },
}
</script>
