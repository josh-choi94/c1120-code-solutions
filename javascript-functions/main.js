function convertMinutesToSeconds(minutes) {
  return Math.floor(minutes * 60);
}
console.log("Value of Minutes to Seconds:", convertMinutesToSeconds(5));

function greet(name) {
  return `Hello ${name}!`;
}
console.log("Value of Greet:", greet("Josh"));

function getArea(width, height) {
  return width * height;
}
console.log("Value of Area:", getArea(10, 20));

function getFirstName(person) {
  return person.firstName;
}
console.log(
  "Value of First Name:",
  getFirstName({ firstName: "Josh", lastName: "Choi" })
);

function getLastElement(array) {
  return array[array.length - 1];
}
console.log(
  "Value of Last Element:",
  getLastElement(["propane", "and", "propane", "accessories"])
);
