/* {
    name: "harsh",
    age: 100
} */
function greet(person) {
    return "hello ".concat(person.name, ", you are ").concat(person.age, " years old");
}
console.log(greet({ name: "harsh", age: 100 }));
// using interface with class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello " + this.name;
    };
    return Person;
}());
/*
  {
    radius: string
    side: number
    width: number
    height: number
  }
*/
function renderShape(ShapesOr) {
    console.log("rendered");
}
