/* {
    name: "harsh",
    age: 100
} */

// our custom type
interface PersonInterface {
  name: string;
  age: number;
}

function greet(person: PersonInterface): string {
  return `hello ${person.name}, you are ${person.age} years old`;
}

console.log(greet({ name: "harsh", age: 100 }));

interface SignUpProps {
  username: string;
  password: string;
  greet(): string;
}

// using interface with class

class Person implements PersonInterface {
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return "Hello " + this.name;
  }
}

// interfaces can extend other interfaces as well

interface A {
  a: string;
  b: string;
}

interface B extends A {
  c: string;
}

// interfaces can use other interfaces as well

interface C {
  c: string;
  a: A;
}

// types

type Animal = {
  legs: number;
  name: string;
};

// types vs interfaces
// types cannot be implemented or extended
// types are useful for unions and ors
// otherwise both can be used interchangeably

interface Circle {
  radius: number;
  borderWidth?: number; // optional
}

interface Square {
  side: number;
}

interface Rectangle {
  width: number;
  height: number;
}

// cannot do and/or in interface
type ShapesOr = Circle | Square | Rectangle;
type ShapesAnd = Circle & Square & Rectangle;
/*
  {
    radius: string
    side: number
    width: number
    height: number
  }
*/

function renderShape(ShapesOr): void {
  console.log("rendered");
}
