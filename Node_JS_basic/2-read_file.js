const fs = require('node:fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8'); // Read the file content & save it into data
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const filteredLines = lines.filter((line) => line.trim() !== ''); // Filter the empty lines to avoid counting them
  const studentLines = filteredLines.slice(1); // Slice the first line containing the fields
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

  console.log(`Number of students: ${numberOfStudents}`);

  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      const studentCount = fields[field].length;
      const studentList = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
    }
  }
}

module.exports = countStudents;
