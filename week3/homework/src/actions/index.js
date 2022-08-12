'use strict';

// CRUD actions
module.exports = {
  createTodo: require('./createTodo'),
  readTodos:  require('./readTodos'),
  updateTodo: require('./updateTodo'),
  deleteTodo: require('./deleteTodo'),
  readTodoById: require('./readTodoById'),
  clearTodos: require('./clearTodos'),
  patchTodo: require('./patchTodo')
};
