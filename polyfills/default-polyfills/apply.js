// Does the same thing as call.

// The only difference:

// Arguments are passed as an array.


// example 1 (without arguments)

// const user = {
//   name: "Gautam"
// };

// function greet() {
//   console.log(this.name);
// }

// greet.apply(user);

// example 2 (with arguments)

const user
    = {
    name: "Gautam"
};

function greet(city) {
    console.log(this.name, city);
}
greet.apply(user, ["Bangalore"]);