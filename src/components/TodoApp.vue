<template>
  <div>
    <todo-header></todo-header>
    <todo-list></todo-list>
    <complet-list></complet-list>
  </div>
</template>

<script>
  import TodoHeader from './TodoHeader.vue';
  import TodoList from './TodoList.vue';
  import CompletList from './CompletList.vue'

  export default {
    components: {
      TodoHeader,
      TodoList,
      CompletList,
    },
    setup () {
      return {}
    }
  }
</script>

<style>
  
</style>