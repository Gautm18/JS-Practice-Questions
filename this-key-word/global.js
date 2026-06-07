//the first thing is we need to who is calling the function
// The answer is usually the value of this

"use strict"; // in strict mode this will be undefined

//NORMAL FUNCTION
// function f1(){
//     console.log(this)
// }

// f1();

//Object Method

// let obj = {
//     name: "gautam",

//     greet(){
//         console.log(this)
//     }
// }

// obj.greet()

//arrow function inside an object

// let obj2 = {
//     name: "gautam",

//     greet: () => {
//         console.log(this)
//     }
// }

// obj2.greet()

//arrow function inside a normal function inside an object

// let obj3 = {
//   name: "gautam",
//   greet: function () {
//     let arrowFunc = () => {
//       console.log(this.name);
//     };
//     arrowFunc();
//   },
// };

// obj3.greet();

//assigning a method to a variable and then calling it.

const user = {
  name: "Gautam",
  greet() {
    console.log(this.name);
  },
};

const fn = user.greet;
fn();

//=======================================================================================

let obj3 = {
  name: "gautam",

  greet: function () {
    function normalFunc() {
      console.log(this.name);
    }

    normalFunc();
  },
};

obj3.greet();

// You might think:

// normalFunc is inside greet
// greet belongs to obj3
// therefore this should be obj3

// But JavaScript does NOT think like that.

// It only sees:

// normalFunc();

// No object before the dot.

// Therefore:

// this = window

//=========================================================================================


// Arrow functions don't create their own this.

// They borrow it from the surrounding scope.

// So JavaScript never applies the "default window" rule to arrow functions.


//=========================================================================================