<template>
    <div class="flex">
    
  <div class="flex flex-col sm:flex-row items-right gap-5">
      <ul>
        <div class="my-2" id="top-gap">
          <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }" class="todo-item">
            <input type="checkbox" :checked="todo.completed" @change="toggleStatus(todo.id)" input/>
            {{ todo.text }}
        
            <VaButton
              icon="clear"
              color="danger"
              @click="remove(todo.id)"
              class="delete-button"
            />
            <VaDivider />
          </li>
        </div>
    
      </ul>
    </div>
    </div>

  </template>
  
  <script>
  import { useTodoStore } from '../stores/todoStore';
  
  export default {
    setup() {
      const todoStore = useTodoStore();
  
      const remove = (id) => {
        todoStore.removeTodo(id);
      };
  
      const toggleStatus = (id) => {
        todoStore.toggleTodoStatus(id);
      };
  
      return {
        todos: todoStore.todos,
        remove,
        toggleStatus
      };
    }
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }

  #top-gap{
    margin-top: 20px;
  }

  .todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 3%;
}

  .delete-button {
  margin-left: auto;
}
  </style>
  