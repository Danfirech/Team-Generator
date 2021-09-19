const { test } = require("@jest/globals");
const Employee = require("../Lib/Employee");

test("creates an employee object", function () {
  const employee = new Employee("dan", 4, "dan@email.com", "Denver");
  expect(employee.name).toBe("dan");
});
