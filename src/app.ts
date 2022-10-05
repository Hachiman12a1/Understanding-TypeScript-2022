class Department {
  //  private id : string;
  //  private name: string;
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "ID");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "Account");
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found.");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  getReport() {
    console.log(this.reports);
  }

  addEmployee(employee: string) {
    if (employee === "Max") return;
    this.employees.push(employee);
  }
}

const IT = new ITDepartment("d1", ["IT"]);
IT.addEmployee("Max");
IT.addEmployee("Manu");
// IT.employees[2] = "Anna";

IT.describe();
IT.printEmployeeInfo();

console.log(IT);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "Dao Van Dat";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.getReport();

accounting.addEmployee("Max");
accounting.addEmployee("Mana");

accounting.printEmployeeInfo();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
