import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    todoList: [],
    completedList: []
  }),
  persist: {
    storage: sessionStorage,
    paths: ['todoList', 'completedList'],
  },
  actions: {
    addTask(title) {
      this.todoList.push({
        title,
        id: Math.random(),
        onEditing: false,
      });
    },

    delTask(index, type) {
      const list = (type === 'need') ? this.todoList : this.completedList;
      list.splice(index, 1);
    },

    doCheck(index, type) {
      if(type === 'need') {
        const completeTask = this.todoList.splice(index, 1);
        this.completedList.push(...completeTask);
      } else {
        const noCompleteTask = this.completedList.splice(index, 1);
        this.todoList.push(...noCompleteTask);
      }
    }
    
  }
});
