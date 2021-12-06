<template>
  <a-list
    :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }"
    :data-source="projects"
  >
    <a-list-item slot="renderItem" slot-scope="project">
      <ProjectItem :project="project" />
    </a-list-item>
  </a-list>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProjectItem from './ProjectItem.vue'

export default {
  components: {
    ProjectItem,
  },
  async fetch() {
    await this.fetchProjects()
  },
  computed: {
    ...mapState(['projects']),
  },
  methods: {
    ...mapActions(['fetchProjects']),
  },
}
</script>
