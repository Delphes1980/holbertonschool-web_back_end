const http = require('node:http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer(async (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if (request.url == '/') {
    response.end('Hello Holberton School!');
  } else if (request.url == '/students') {
    response.end('This is the list of our students');
  
    try {
      await countStudents(databasePath);
      response.end();
    } catch (error) {
      response.end(error.message);
    }
  }
});
  app.listen(1245);

module.exports = app;