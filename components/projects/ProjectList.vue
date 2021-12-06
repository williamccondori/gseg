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
import ProjectItem from './ProjectItem.vue'
export default {
  components: {
    ProjectItem,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Project 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.',
        },
      ],
    }
  },
}
</script>
