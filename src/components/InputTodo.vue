<template>
    <div class="input-container">
      <input type="text" id="input" required="" v-model="newTodo" @keyup.enter="addNewTodo" />
      <label for="input" class="label">Enter Text</label>
      <div class="underline"></div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useTodoStore } from '../stores/todoStore';
  
  export default {
    setup() {
      const todoStore = useTodoStore();
      const newTodo = ref('');
  
      const addNewTodo = () => {
        if (newTodo.value.trim() !== '') {
          todoStore.addTodo(newTodo.value);
          newTodo.value = '';
        }
      };
  
      return {
        newTodo,
        addNewTodo
      };
    }
  };
  </script>
  
  <style scoped>
  .input-container {
  position: relative;
  margin: 50px auto;
  width: 200px;
}

.input-container input[type="text"] {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type="text"]:focus ~ .label,
.input-container input[type="text"]:valid ~ .label {
  top: -20px;
  font-size: 16px;
  color: black !important;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type="text"]:focus ~ .underline,
.input-container input[type="text"]:valid ~ .underline {
  transform: scaleX(1);
}

  </style>
  