// const add = (a: number, b: number) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// printOutput(add(1, 2));

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addedNumbers = add(5, 10, 20, 30);
console.log(addedNumbers);
