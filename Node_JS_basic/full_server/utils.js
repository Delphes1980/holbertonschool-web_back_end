const fs = require('node:fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n'); // Split the file content into an array of lines
    const filteredLines = lines.filter((line) => line.trim() !== ''); // Filter the empty lines to avoid counting them
    const studentLines = filteredLines.slice(1); // Slice the first line containing the fields
    // const numberOfStudents = studentLines.length;

    const fields = {}; // Use an object  to group students by their fields of study

    for (const line of studentLines) {
      const parts = line.split(','); // Split the lines to get individual data parts
      const firstname = parts[0];
      const field = parts[3].trim(); // Get the field name & remove whitespaces

      // If the field doesn't exist as a key, create it with an empty array
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
    // return { numberOfStudents, fields };
    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = readDatabase;
