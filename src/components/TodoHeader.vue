<template>
  <div class="header">
      <div class="container">
        <router-link to="/" class="logo">Список дел</router-link>
        <todo-form></todo-form>
      </div>
    </div>
</template>

<script>
  import TodoForm from './TodoForm.vue';
  export default {
    components: {
      TodoForm,
    },
    setup() {
      return {}
    }
  }
</script>

<style>
  .header {
    background-color: #333;
    padding: 10px 0;
    margin-bottom: 40px;
  }

  .header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header .container .logo {
    width: 130px;
    line-height: 50px;
    color: #ddd;
    font-size: 24px;
    cursor: pointer;
    text-decoration: none;
  }
</style>
