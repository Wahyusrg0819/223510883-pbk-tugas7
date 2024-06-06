<template>
    <p>Total belum selesai: {{ incompleteTodosCount }}</p>
  </template>
  
  <script>
  import { useTodoStore } from '../stores/todoStore';
  import { computed } from 'vue';
  
  export default {
    setup() {
      const todoStore = useTodoStore();
      const incompleteTodosCount = computed(() => todoStore.incompleteTodosCount);
  
      return {
        incompleteTodosCount
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  