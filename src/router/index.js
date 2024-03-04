import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import TodoApp from '../components/TodoApp.vue';

export const router = createRouter({
  routes: [
  {
    path: '/',
    component: Home
  },
  {
    path: '/tasks',
    component: TodoApp
  }
],
  history: createWebHistory()
});
