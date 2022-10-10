type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate : Date;
}

type ElevatedEmployee = Admin & Employee;

const el : ElevatedEmployee = {
  name : 'Max',
  privileges : ['create-server'],
  startDate : new Date(),
}

type Combinabled = string | number;
type Numeric = number | boolean;

type Universal = Combinabled & Numeric;
