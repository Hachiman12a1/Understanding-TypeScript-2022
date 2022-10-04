function combine(
  n1: number | string,
  n2: number | string,
  resultConversion: 'as-number' | 'as-string'
) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number" && resultConversion === "as-number") {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineAges1 = combine("30", "26", 'as-number');
console.log(combineAges);

const combineNames = combine("Max", "Anna", 'as-string');
console.log(combineNames);
