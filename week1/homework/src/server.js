'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  // eslint-disable-next-line no-unused-vars
  let state = 10;
  let currentState = state;

  const server = http.createServer((req, res) => {
    // TODO: Write your homework code here
    console.log(req.method, req.url);
    switch (req.url) {
      case '/': // Default endpoint
        break;
      case '/state':
        break;
      case '/add':
        state++;
        break;
      case '/subtract':
        state--;
        break;
      case '/reset':
        state = 10;
        break;
      default:
        res.statusCode = 404;
        let error = 'Not found';
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error }, null, 2));
        return;
    }
    currentState = state;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 'state': currentState }, null, 2));
  });

  return server;
}

module.exports = {
  createServer
};
