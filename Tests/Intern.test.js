const { test } = require("@jest/globals");
const Intern = require("../Lib/Intern");

test("creates an intern object", function () {
  const intern = new Intern("dan", 4, "dan@email.com", "Denver");
  expect(intern.name).toBe("dan");
});

// test("getSschool should return school", function () {
//   expect(intern.getSchool()).toBe("denver");
// });

// test("should return id", function () {
//   expect(intern.id).toBe(4);
// });

// const bob = {
//   name: "Bob",
//   id: 1,
//   github: "bobino.com",
//   roll: "employee",
// };

// const fred = new Intern("Fred", 2, "fred@gmail.com", "Denver");
// console.log(bob);
// console.log(fred.school);

// const dan = new Intern("Dan", 5, "dan@gmail.com", "Kalamazoo");

// console.log(dan.getSchool());
