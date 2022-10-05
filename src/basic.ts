function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 3;
const printResult = true;
const phraseResult = "Result is: ";

add2(number1, number2, printResult, phraseResult);
