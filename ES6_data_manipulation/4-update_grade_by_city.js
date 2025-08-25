export default function updateStudentGradeByCity(students, city, newGrades) {
    // Filter students by city to get a new array
  return students.filter((student) => student.location === city)
    // Map over the filtered array to update each student's grade
    .map((student) => {
    // Find the grade object for the current student
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    // Return a new student object with the updated grade
      return {
        ...student, // Copy of all existing student properties
        // Assign the new grade if found, otherwise N/A
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
