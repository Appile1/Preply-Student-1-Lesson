let name: String = "TypeScript";
let isSTudent: Boolean = true;
let age: Number = 20;
let hobbies: string[] = ["Sports", "Cooking"];
let value: any = 5;

type Person1 = {
  name: string;
  age: number;
};

type course1 = string | number | boolean;

const course: course1 = "As";

const person: Person = {
  name: "Maximilian",
  age: 30,
};

let percent: number | string = 10;

interface Person {
  name: string;
  age: number;
  email?: string;
}

let student1: Person = {
  name: "John",
  age: 25,
};

let student2: Person = {
  name: "Jane",
  age: 22,
  email: "ASD",
};

let id: number | string = 21;
if (typeof id === "string") {
  console.log(id.toUpperCase());
} else {
  console.log(id);
}

function add(a: number, b: number): number {
  return a + b;
}

function print(value: number): void {
  console.log(value);
}

function add2(a: number, b: number): number {
  return a + b;
}
function add3(a: string, b: string): string {
  return a + b;
}
// DRY - Don't Repeat Yourself

function identity<A>(value: A): A {
  return value;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
