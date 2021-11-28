// use Employee constructor
const Employee = require("./Employee");

// intern constructor extends employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  // returning school
  getSchool() {
    return this.school;
  }

  // Overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
}

// to be exported
module.exports = Intern;
