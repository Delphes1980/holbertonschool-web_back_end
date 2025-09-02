const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const databasePath = process.argv[2];

app.get('/', (request, response) => {
  response.status(200);
  response.set('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  response.status(200);
  response.set('Content-Type', 'text/plain');
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
});

app.listen(1245);

module.exports = app;
