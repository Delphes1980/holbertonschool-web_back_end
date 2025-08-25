export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const list = students.map((x) => x.id);
  return list;
}
