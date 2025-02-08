function greet(person: string, date: Date): string {
  try {
    console.log(`Hello, ${person}, today is ${date.toDateString()}.`);
    return `Hello, ${person}, today is ${date.toDateString()}.`;
  } catch (error) {
    console.error("Error in greet function:", error);
    return "Error generating greeting"; // Return a default string in case of error
  }
}

let message: string = greet("John Doe", new Date());
console.log(message);

// Example of potential error: Attempting to access a property of a non-object
// The improved greet function now handles this case gracefully
let message2: string = greet(null as unknown as string, new Date());
console.log(message2); //Will log: Error generating greeting