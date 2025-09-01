/** Counts the number of students from a CSV database file, asynchronously */

const fs = require('node:fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n'); // Split the file content into an array of lines
      const filteredLines = lines.filter((line) => line.trim() !== ''); // Filter the empty lines to avoid counting them
      const studentLines = filteredLines.slice(1); // Slice the first line containing the fields
      const numberOfStudents = studentLines.length;

      const fields = {}; // Use an object  to group students by their fields of study

      for (const line of studentLines) {
        const parts = line.split(','); // Split the lines to get individual data parts
        const firstname = parts[0];
        const field = parts[3].trim(); // Get the fiel name & remove whitespaces

        // If the field doesn't exist as a key, create it with an empty array
        if (!fields[field]) {
          fields[field] = [];
        }
        // Add the student's first name to their corresponding field's array
        fields[field].push(firstname);
      }

      console.log(`Number of students: ${numberOfStudents}`);

      // Loop through the fields object to log the count & list of students for each field
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const studentCount = fields[field].length;
          const studentList = fields[field].join(', ');
          console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
        }
      }
    })

    .catch((error) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
