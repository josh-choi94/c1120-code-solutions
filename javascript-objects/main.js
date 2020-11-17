/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: "Josh",
  lastName: "Choi",
  age: 26,
};

var fullName = student.firstName + " " + student.lastName;

console.log("value of fullName:", fullName);

student.livesInIrvine = false;
student.previousOccupation = "sales";

console.log("value of student.livesInIrvine:", student.livesInIrvine);
console.log("value of student.previousOccupation:", student.previousOccupation);

var vehicle = {
  make: "McLaren",
  model: "720s",
  year: "2020",
};

(vehicle["color"] = "black"),
  (vehicle["isConvertible"] = true),
  console.log("value of vehicle[color]:", vehicle["color"]);
console.log("value of vehicle[isconvertible]:", vehicle["isConvertible"]);
console.log("value of vehicle:", vehicle);

var pet = {
  name: "Luna",
  type: "Cat",
};

delete pet.name;
delete pet.type;

console.log("value of pet:", pet);
