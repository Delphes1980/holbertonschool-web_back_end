const express = require('express');
const fs = require('node:fs').promises;
const countStudents = require('./3-read_file_async');

const app = express();
const databasePath = process.argv[2];

app.get('/', (request, response) => {
  response.status(200);
  response.set('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  response.status(200);
  response.set('Content-Type', 'text/plain');
  response.write('This is the list of our students\n');

  fs.readFile(databasePath, 'utf-8')
    .then((data) => {
      const lines = data.split('\n');
      const filteredLines = lines.filter((line) => line.trim() !== '');
      const studentLines = filteredLines.slice(1);
      const numberOfStudents = studentLines.length;

      const fields = {};

      for (const line of studentLines) {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      response.write(`Number of students: ${numberOfStudents}\n`);

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const studentCount = fields[field].length;
          const studentList = fields[field].join(', ');
          response.write(`Number of students in ${field}: ${studentCount}. List: ${studentList}\n`);
        }
      }

      response.end();
    })
    .catch((error) => {
      response.end('Cannot load the database');
    });
});

app.listen(1245);

module.exports = app;
