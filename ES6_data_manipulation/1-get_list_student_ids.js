export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const list = students.map((student) => student.id);
  return list;
}
