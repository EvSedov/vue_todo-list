<template>
  <div class="header">
    <div class="container">
      <div class="logo">Список дел</div>
    </div>
  </div>
  <div class="container">
    <h1>ToDo List</h1>
    <h2>Самая лучшая программа для планирования своих дел!</h2>
    <h2>Для начала работы нажмите на кнопку</h2>
    <router-link
      to="/tasks"
      custom
      v-slot="{ navigate }"
    >
      <button class="btn" @click="navigate" role="link">Начать работу</button>
    </router-link>
  </div>
</template>

<script>
  export default {
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
  }
</style>
