import { defineStore } from 'pinia';

let currentId = 0;

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(text) {
      this.todos.push({ id: currentId++, text, completed: false });
    },
    removeTodo(id) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    toggleTodoStatus(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  },
  getters: {
    incompleteTodosCount: (state) => {
      return state.todos.filter(todo => !todo.completed).length;
    }
  }
});
