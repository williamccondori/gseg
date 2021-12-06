import { DataStore } from '@aws-amplify/datastore'
import { Project } from '~/models'

export const state = () => ({
  projects: [],
})

export const actions = {
  async fetchProjects({ commit }) {
    const projects = await DataStore.query(Project)
    commit('setProjects', projects)
  },
  async createProject({ commit }, project) {
    await DataStore.save(
      new Project({
        name: project.name,
        description: project.description,
        userId: 'a3f4095e-39de-43d2-baf4-f8c16f0f6f4d',
        isActive: true,
      })
    )
    commit('setProjects', [])
  },
}

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  },
}
