function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}.`);
  return `Hello, ${person}, today is ${date.toDateString()}.`;
}

let message: string = greet("John Doe", new Date());
console.log(message);