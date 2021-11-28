// use Employee constructor
const Employee = require("./Employee");

// engineer constructor extends employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  // returning github
  getGithub() {
    return this.github;
  }

  // Overridden to return 'Engineer''
  getRole() {
    return "Engineer";
  }
}

// to be exported
module.exports = Engineer;
