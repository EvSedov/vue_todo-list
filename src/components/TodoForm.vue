<template>
  <div class="form">
    <input
    class="form-input"
      type="text"
      v-model="title"
      @keypress.enter="addTodoAndClear(title)"
    >
    <button class="btn" @click="addTodoAndClear(title)">Добавить задачу</button>
  </div>      
</template>

<script>
  import { ref } from 'vue'; 
  import { useStore } from '../store/useStore';

  export default {
    setup() {
      const store = useStore();
      const title = ref("");

      function addTodoAndClear(item) {
        if (item === '') {
          return
        }
        store.addTask(item);
        title.value = '';
      };
      
      return { title, addTodoAndClear };
    },
  }
</script>

<style>
  .form {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  .form-input {
    width: calc(100% - 145px);
    height: 40px;
    text-indent: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    border-radius: 0;
    box-sizing: border-box;
    outline: none;
    transition: 0.2s border;
  }

  .form-input:focus {
    border: 1px solid #12c0dd;
  }
</style>