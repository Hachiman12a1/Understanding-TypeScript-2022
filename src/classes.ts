abstract class Department {
  //  private id : string;
  //  private name: string;
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(protected id: string, public name: string) {
    // this.id = id;
    // this.name = name;
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { nameEmployee: name };
  }

  abstract describe(this: Department): void;
  // console.log(`Department ${this.id} : ${this.name}`);

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

  describe() {
    console.log('IT Department - ID ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance : AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Account");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
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

  describe() {
    console.log("Accounting Department - ID " + this.id);
  }
}

const IT = new ITDepartment("d1", ["IT"]);
IT.addEmployee("Max");
IT.addEmployee("Manu");
// IT.employees[2] = "Anna";

IT.describe();
IT.printEmployeeInfo();

console.log(IT);

const accounting = AccountingDepartment.getInstance();

console.log(accounting);

accounting.mostRecentReport = "Dao Van Dat";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.getReport();

accounting.addEmployee("Max");
accounting.addEmployee("Mana");

// accounting.printEmployeeInfo();

accounting.describe();

const employee1 = Department.createEmployee("Employee1");
console.log(employee1);

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
