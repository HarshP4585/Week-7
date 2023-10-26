enum Operator {
  Add, // 0
  Sub, // 1
  Mul, // 2
  Div, // 3
}

function calculatorNew(a: number, b: number, operator: Operator): number {
  if (operator === 0) {
    return a + b;
  }
  if (operator === 1) {
    return a - b;
  }
  if (operator === 2) {
    return a * b;
  }
  if (operator === 3) {
    return a / b;
  }
  return -1;
}

console.log(calculatorNew(1, 2, Operator.Add));
