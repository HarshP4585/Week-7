function calculator(
  a: number,
  b: number,
  operator: "add" | "sub" | "mul" | "div"
): number {
  if (operator === "add") {
    return a + b;
  }
  if (operator === "sub") {
    return a - b;
  }
  if (operator === "mul") {
    return a * b;
  }
  if (operator === "div") {
    return a / b;
  }
  return -1
}
