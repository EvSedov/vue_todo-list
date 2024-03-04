<template>
  <div class="container">
    <h2>
      <span>Планы:</span>
      <span class="task-num">{{ todoList.length }}</span>
    </h2>
    <ul class="task-list">
      <li
        v-for="(task, index) in todoList"
        :key="task.id"
      >
        <div v-if="!task.onEditing">
          <input type="checkbox" v-on:change="doCheck(index, 'need')"/>
          <span>{{ task.title }}</span>
        </div>
        <div class="form" v-if="task.onEditing">
          <input
            type="text"
            v-model="task.title"
            @keypress.enter="toggleEditing(task)"
          >
        </div>
        <div>
          <button class="btn-task btn-edit" v-on:click="toggleEditing(task)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
            </svg>
          </button>
          <button class="btn-task" v-on:click="delTask(index, 'need')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { storeToRefs } from 'pinia';
  import { useStore } from '../store/useStore';

  export default {
    setup() {
      const store = useStore();
      const { todoList } = storeToRefs(store);
      const { delTask, doCheck } = store;

      function toggleEditing(task) {
        task.onEditing =!task.onEditing;
      };

      return { todoList, toggleEditing, doCheck, delTask };
    }
  }
</script>

<style>
  .container {
    width: 800px;
    margin: 0 auto;
    padding: 0 15px;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    margin: 25px 0;
    border-bottom: 1px solid #bfbfbf;
  }

  h2 .task-num {
    border-radius: 20px;
    border: 2px solid #2a2f36;
    color: #2a2f36;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 10px;
  }

  .task-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    line-height: 32px;
    margin-bottom: 10px;
    border-radius: 3px;
    background-color: #fff;
  }

  .task-list {
    padding-left: 0;
  }

  .btn-task {
    border: 1px solid #2a2f36;
    font-size: 12px;
    border: 2px solid #2a2f36;
    background-color: #333333;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    padding: 5px 10px;
    font-size: 12px;
    outline: none;
    transition: 0.2s;
  }

  .btn-edit {
    margin-right: 10px;
  }

  .btn-task:hover {
    background-color: #535151;
    border-color: #535151;
  }

  input {
    width: calc(100% - 145px);
    height: 40px;
    text-indent: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    border-radius: 0;
    box-sizing: border-box;
    outline: none;
    transition: 0.2s border;
    border: 1px solid #12c0dd;
  }

  input[type="checkbox"] + span {
    padding-left: 10px;
  }

  input[type="checkbox"]:checked,
  input[type="checkbox"]:not(:checked){
    position: absolute;
    z-index: 1;
    opacity: 0;
    width: 20px;
    height: 20px;
    margin-top: 6px;
  }

  input[type="checkbox"]:checked + span,
  input[type="checkbox"]:not(:checked) + span{
    position: relative;
    padding-left: 35px;
    cursor:pointer;
  }

  input[type="checkbox"]:checked + span::before{
    content:'';
    position: absolute;
    width: 16px;
    height: 16px;
    left:0;
    top:calc(50% - 10px);
    background-color: transparent;
    border-radius: 2px;
    border: 2px solid #4fc1de;
  }

  input[type="checkbox"]:checked + span::after{
    content:'';
    position: absolute;
    width: 12px;
    height: 12px;
    transition: all .2s ease;
    opacity: 1;
    left: 4px;
    top: calc(50% - 6px);
    background-color: #4fc1de;
  }

  input[type="checkbox"]:not(:checked) + span::before{
    content:'';
    position: absolute;
    width: 16px;
    height: 16px;
    left:0;
    top:calc(50% - 10px);
    background-color: transparent;
    border-radius: 2px;
    border: 2px solid #5d575f;
  }

  input[type="checkbox"]:not(:checked) + span::after{
    content:'';
    position: absolute;
    width: 12px;
    height: 12px;
    transition: all .2s ease;
    opacity: 0;
    left: 4px;
    top: calc(50% - 6px);
    background-color: #7d25a9;
  }
</style>