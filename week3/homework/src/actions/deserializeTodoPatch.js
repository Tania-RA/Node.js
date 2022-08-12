'use strict';

async function deserializeTodoPatch(request, response) {
  const { todo } = request.body;
  if (todo == null)
    throw new Error('todo not set');

  if (todo.description != null && todo.done != null) {
    todo.description = todo.description.trim();
    todo.done = todo.done.trim();
  }
  else if (todo.description != null) {
    todo.description = todo.description.trim();
  }
  else if (todo.done != null) {
    todo.done = todo.done.trim();
  }
  else {
    throw new Error('Nothing to change!');
  }
  return todo;
};

module.exports = deserializeTodoPatch;
