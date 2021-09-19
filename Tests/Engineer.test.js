const { test } = require("@jest/globals");
const Engineer = require("../Lib/Engineer");

test("creates an Engineer object", function () {
  const engineer = new Engineer("Engineer", 4, "dan@email.com", "Denver");
  expect(engineer.name).toBe("Engineer");
});
