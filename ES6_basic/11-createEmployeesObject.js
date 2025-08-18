export default function createEmployeesObject(departmentName, employees) {
// departmentName = String and employees = Array of Strings
// The function should return an object with this format
// {
//      $departmentName: [
//           $employees,
//      ],
// }
  return {
    [departmentName]: employees,
  };
}
