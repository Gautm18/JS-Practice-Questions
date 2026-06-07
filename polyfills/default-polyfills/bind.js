// Unlike call/apply bind does not immediately invoke the function. Instead, it returns a new function with the specified this value and optional arguments.

const user = {
  name: "Gautam"
};

function greet() {
  console.log(this.name);
}

const newFn = greet.bind(user);

// Nothing happens yet.

newFn(); // Now the function is invoked, and this refers to the user object, so it will log "Gautam".

// Why bind Exists

// Remember this problem?

// const user1 = {
//   name: "Gautam",

//   greet() {
//     console.log(this.name);
//   }
// };

// const fn = user1.greet;

// fn();

// Output:undefined

// because - Context lost.

// fix is to use bind method

const fn =
  user1.greet.bind(user1);

fn();