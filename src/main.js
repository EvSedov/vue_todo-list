import { createApp } from 'vue'

createApp({
  data() {
    return {
      valueInput: '',
      needDoList: [],
      completeList: []
    };
  },
  methods: {
    handleInput (event) {
      this.valueInput = event.target.value;
    },

    addTask() {
      if (this.valueInput === '') { return }
      this.needDoList.push({
        title: this.valueInput,
        id: Math.random(),
        onEditing: false,
      });
      this.valueInput = ''
    },

    doCheck(index, type) {
      if(type === 'need') {
        const completeTask = this.needDoList.splice(index, 1);
        this.completeList.push(...completeTask);
      } else {
        const noCompleteTask = this.completeList.splice(index, 1);
        this.needDoList.push(...noCompleteTask);
      }
    },

    toggleEditing(task){
      task.onEditing =!task.onEditing;
    },

    delTask(index, type) {
      const toDoList = (type === 'need') ? this.needDoList : this.completeList;
      toDoList.splice(index, 1);
    }
  }
}).mount('#app');

