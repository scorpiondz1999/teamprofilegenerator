// use Employee constructor
const Employee = require("./Employee");

// manager constructor extends employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // returning officenumber
  getOfficeNumber() {
        return this.officeNumber;
      }

  // Overridden to return 'Manager'
  getRole() {
    return "Manager";
  }
}

// to be exported
module.exports = Manager;
