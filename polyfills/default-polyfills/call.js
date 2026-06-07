// const user = {
//   name: "Gautam"
// };

// function greet() {
//   console.log(this.name);
// }

// greet();

//above code will give us undefined because this keyword in the greet function is not referring to the user object.

//BUT WHAT IF WE WANT this === user?

// for that call() method will help .

// syntax - functionName.call(thisArg, arg1, arg2, ...)

//example 1 (without arguments)

// const user = {
//   name: "Gautam"
// };

// function greet() {
//   console.log(this.name);
// }

// greet.call(user);

//example 2 (with arguments)

const user = {
  name: "Gautam"
};

function greet(city) {
  console.log(this.name, city);
}

greet.call(user, "Bangalore");