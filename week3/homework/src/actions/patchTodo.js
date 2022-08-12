'use strict';

const deserializeTodoPatch = require('./deserializeTodoPatch');

function patchTodo(todo, request, response) {
  deserializeTodoPatch(request, response)
    .then(({ description, done }) => {
      const id = request.params.id;
      return todo.patch(id, description, done);
    })
    .then(todo => {
      response.status(200);
      response.json({ todo });
    })
    .catch(({ message, code }) => {
      response.status(code === 'not-found' ? 404 : 500);
      response.json({ error: message });
    });
};

module.exports = patchTodo;
