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
    response.write('This is the list of our students\n');

    // Save the original console.log function
    const originalLog = console.log;
    let capturedOutput = '';

    // Define a temporary function to capture the output
    console.log = (message) => {
      capturedOutput += `${message}\n`;
    };

    try {
      // Call the countStudents function and wait for it to finish
      // All console.log() outputs from this function will be captured
      await countStudents(databasePath);

      // Send the captured output to the HTTP client
      response.end(capturedOutput);
    } catch (error) {
      response.end(error.message);
    } finally {
      // Restore the original console.log function, regardless of the result
      console.log = originalLog;
    }
  } else {
    response.statusCode = 404;
    response.end('Not found');
  }
});

app.listen(1245);
module.exports = app;
