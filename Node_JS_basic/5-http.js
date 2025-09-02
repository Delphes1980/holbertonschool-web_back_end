const http = require('node:http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer(async (request, response) => {
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    response.statusCode = 200;
    response.end('This is the list of our students');

    const originalLog = console.log;
    let capturedOutput = '';

      console.log = (message) => {
        capturedOutput += `${message}\n`;
      };

    try {
      await countStudents(databasePath);
      console.log = originalLog;
      response.end(capturedOutput);
    } catch (error) {
      console.log = originalLog;
      response.end(error.message);
    }
  } else {
    response.statusCode = 404;
    response.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
