function calculator(a, b, operator) {
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
    return -1;
}
