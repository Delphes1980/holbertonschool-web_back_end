const fs = require('node:fs').promises;

/**
 * Counts the number of students from a CSV database file, asynchronously
 * @param {string} path - The path to the database file.
 * @returns {Promise<void>} - A promise that resolves when the operation is complete.
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
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

    console.log(`Number of students: ${numberOfStudents}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const studentCount = fields[field].length;
        const studentList = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
