const { test } = require("@jest/globals");
const Manager = require("../Lib/Manager");

test("creates an manager object", function () {
  const manager = new Manager("dan", 4, "dan@email.com", "Denver");
  expect(manager.name).toBe("dan");
});
