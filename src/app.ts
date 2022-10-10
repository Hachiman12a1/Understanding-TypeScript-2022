type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinabled = string | number;
type Numeric = number | boolean;

type Universal = Combinabled & Numeric;

function add(a : number, b:number) : number;
function add (a : string, b: string) : string;
function add (a : string, b: number) : string;
function add (a: number, b: string) : string;
function add(a: Combinabled, b: Combinabled) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Max', 'Schwarz');
result.split(' ')


// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);

//   if ("privileges" in emp) {
//     console.log("privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("StartDate: " + emp.startDate);
//   }
// }

// printEmployeeInfo({
//   name: "Dat",
//   privileges: ["Intern React"],
//   startDate: new Date(),
// });

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading Cargo... " + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving at speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 100 });

// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi There!";
// }

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   username: "Must start with a capital character!",
// };
