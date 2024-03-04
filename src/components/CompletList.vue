<template>
  <div class="container">
    <h2>
      <span>Выполнено:</span>
      <span class="task-num">{{ completedList.length }}</span>
    </h2>
    <ul class="task-list complete-list">
      <li
        v-for="(task, index) in completedList"
        :key="task.id"
      >
        <div>
          <input type="checkbox" v-on:change="doCheck(index, 'complete')"  checked>
          <span>{{ task.title }}</span>
        </div>
        <button class="btn-task" v-on:click="delTask(index, 'complete')">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { useStore } from '../store/useStore';
  import { storeToRefs } from 'pinia';

  export default {
    setup () {
      const store = useStore();
      const { completedList } = storeToRefs(store)
      const { delTask, doCheck } = store;

      return { completedList, doCheck, delTask }
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