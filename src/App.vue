<template>
  <div id="app">
    <h1>Todo List</h1>
    <InputTodo />
    <IncompleteTodosCount />
    <TodoList />
    
  </div>
</template>

<script>
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
import IncompleteTodosCount from './components/IncompleteTodosCount.vue';

export default {
  name: 'App',
  components: {
    InputTodo,
    TodoList,
    IncompleteTodosCount
  }
};
</script>

<style>
h1 {
  text-align: center;
}
</style>
