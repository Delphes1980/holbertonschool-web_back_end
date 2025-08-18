// This function creates a report object from a list of employees
// The 'employeesList' parameter is expected to be an object
// where the keys are department names and values are arrays of employee names
export default function createReportObject(employeesList) {
  return {
    // This key holds a shallow copy of the original 'employeesList' object using spread syntax
    // ensuring us that we don't modify the original data
    allEmployees: { ...employeesList },
    // A ES6 method property. A function that is part of the object
    getNumberOfDepartments(allEmployees) {
      // Returns the number of departments by getting the keys (department names)
      // 'Object.keys()' returns an array of the object's keys
      return Object.keys(allEmployees).length;
    },
  };
}
