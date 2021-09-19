const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.roll = "Engineer";

    this.officeNumber = officeNumber;
  }

  //METHODS

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
