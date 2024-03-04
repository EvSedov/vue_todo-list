import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
  {
    path: '/',
    // component: HomeView
  },
  {
    path: '/tasks',
    // component: TodoList
  }
],
  history: createWebHistory()
})