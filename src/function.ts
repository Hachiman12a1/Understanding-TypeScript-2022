function add1(n1: number, n2: number) {
  return n1 + n2;
}

function printResult1(num: number) {
  console.log("Result : " + num);
}

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}
printResult1(add1(5, 2));

let combineValues: (a: number, b: number) => number;
combineValues = add1;

console.log(combineValues(8, 8));

addAndHandle(10, 10, (result) => {
  console.log(result);
});
