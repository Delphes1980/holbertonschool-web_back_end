const http = require('node:http');
const fs = require('node:fs').promises;
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
  } else {
    response.statusCode = 404;
    response.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
