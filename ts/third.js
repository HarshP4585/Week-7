var Operator;
(function (Operator) {
    Operator[Operator["Add"] = 0] = "Add";
    Operator[Operator["Sub"] = 1] = "Sub";
    Operator[Operator["Mul"] = 2] = "Mul";
    Operator[Operator["Div"] = 3] = "Div";
})(Operator || (Operator = {}));
function calculatorNew(a, b, operator) {
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
