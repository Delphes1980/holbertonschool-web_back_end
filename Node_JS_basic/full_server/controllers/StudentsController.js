const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    const databasePath = process.argv[2];

    try {
      // Read the db and get the student data grouped by field
      const studentByField = await readDatabase(databasePath);
      let responseBody = 'This is the list of our students\n';
      // Sort the field alphabetically
      const sortedFields = Object.keys(studentByField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      for (const field of sortedFields) {
        const studentCount = studentByField[field].length;
        const studentList = studentByField[field].join(', ');
        responseBody += `Number of students in ${field}: ${studentCount}. List: ${studentList}\n`;
      }
      // Send the complete response with a 200 status code
      response.status(200).send(responseBody);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const databasePath = process.argv[2];
    // Get the 'major' parameter from the URL query string
    const { major } = request.query;

    // Validate the major parameter against allowed values
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      // Read the db and get the student data grouped by field
      const studentByField = await readDatabase(databasePath);

      // Check if the requested major exists in the data
      if (studentByField[major]) {
        const studentList = studentByField[major].join(', ');
        // Send the list of students for the specific major
        response.status(200).send(`List: ${studentList}`);
      } else {
        // Handle the case where the major is valid but has no students
        response.status(200).send('List:');
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}
module.exports = StudentsController;
