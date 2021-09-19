const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    this.roll = "Engineer";
  }

  //METHODS

  getGithub() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}

const engineer = new Engineer("dan", 7, "dan@gmail.com", "githubdanodano");
console.log(engineer.getRole());

module.exports = Engineer;
