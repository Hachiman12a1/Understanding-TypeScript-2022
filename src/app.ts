class Department {
  //  private id : string;
  //  private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ${this.id} : ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInfo();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
