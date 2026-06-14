
# What's the difference between var, let, and const?
ans - var:
- Can be reassigned
- Can be redeclared
- Function-scoped
- Hoisted and initialized with undefined
- No Temporal Dead Zone (TDZ)

let:
- Can be reassigned
- Cannot be redeclared in the same scope
- Block-scoped
- Hoisted but inaccessible before initialization
- Has a Temporal Dead Zone (TDZ)

const:
- Cannot be reassigned
- Cannot be redeclared in the same scope
- Block-scoped
- Must be initialized at the time of declaration
- Hoisted but inaccessible before initialization
- Has a Temporal Dead Zone (TDZ)

# what is functional scope and blocked scope

1) Function Scope

A variable declared with var is accessible anywhere inside the function where it is declared, regardless of blocks like if, for, or while.

2) Block Scope

A variable declared with let or const is accessible only within the {} block where it is declared.

👉 Example :
            if (true) {
            var a = 10;
            let b = 20;
            const c = 30;
            }

            console.log(a); // 10 ✅
            console.log(b); // ❌ Error
            console.log(c); // ❌ Error
Why?
        var ignores block boundaries.
        let and const respect block boundaries.

# what is temporal dead zone

Ans - The Temporal Dead Zone (TDZ) is the period between:

When a let or const variable is hoisted, and
When it is initialized in the code.

During this period, you cannot access the variable, even though JavaScript already knows about it otherwise it will give #referenceError

# Explain type coercion with examples (== vs ===)

Ans - Type coercion is when JavaScript automatically converts one data type into another during an operation or comparison.

👉 Example :
console.log("5" + 1);  ----> output (51)

* **(Loose Equality)-->(==)**
compares values only.
Before comparing, JavaScript tries to convert the operands to the same type.
👉 Example :
console.log("5" + 1);  ----> output (51)
console.log(false == 0); ------> true
console.log(true == 1); -----> true
console.log(null == undefined); ----> true
console.log([] == false);  -----> true <Reason> ->  {[] → "" -> "" → 0 && false → 0 hence 0 == 0}
console.log(null == undefined); ---> true


* **(Strict Equality)-->(===)**
compares:

1) Value
2) Type

No type conversion is performed.

# type of null and undefined

Ans - typeof null -> object
      typeof undefined -> undefined

**Interview Answer**

typeof undefined returns "undefined". typeof null returns "object", which is a historical bug in JavaScript. Although null is a primitive value representing the intentional absence of a value, the typeof operator incorrectly reports it as an object for backward compatibility.

# What is lexical scope? How does the scope chain work?

Ans - Lexical scope means that a function can access variables from the scope in which it was defined, not where it is called.
👉 Example :
const city = "Bangalore";

function showCity() {
  console.log(city);
} 

function execute(fn) {
  const city = "Mumbai";
  fn();
}*

execute(showCity);

* output -> bangalore (reason - JavaScript uses where the function was defined, not where it was called.)

<scope chain> --> When JavaScript tries to find a variable, it looks:

1) In the current scope
2) Then in the parent scope
3) Then in the parent's parent scope
4) Continues until the global scope
5) If not found → ReferenceError

This search path is called the scope chain.

# Variable Shadowing

If the same variable name exists in multiple scopes, JavaScript uses the nearest one

# closure?
Ans - give the example of outer functiona and the inner function

# What is IIFE and when would you use it?

Ans - 
IIFE = Immediately Invoked Function Expression

It is a function that:

1) Is defined
2) Is executed immediately after being created

* *Syntax:*
👉 Example :

(function () {
  console.log("Hello");
})();

Output:

Hello

The function runs immediately and never needs to be called later.

<reason> -> An IIFE (Immediately Invoked Function Expression) is a function expression that is executed immediately after it is created. It is commonly used to create a private scope, avoid global variable pollution, and run initialization code once.

👉👉 Real-World Use Case #3: Initialization Code
(function () {

  console.log("Application Started");
})();

Runs once during startup.

Common in older applications.


# What's the difference between function declarations and expressions in hoisting?|
Ans - 
1) A function declaration is defined using the function keyword with a name.
👉 *Example*

function greet() {
  console.log("Hello");
}

2) Function Expression

A function expression is when a function is assigned to a variable.

👉 *Example*

const greet = function () {
  console.log("Hello");
};


* <Easy Memory Trick>
1) Function Declaration
→ Entire function is hoisted
→ Can call before declaration

2) Function Expression
→ Only variable is hoisted
→ Cannot call before assignment
Quick Example
// Declaration
greet(); // ✅

function greet() {}
// Expression
greet(); // ❌

const greet = function () {};
Interview Answer

*Function declarations are fully hoisted, meaning both the function name and body are available before the declaration appears in the code. Function expressions are not fully hoisted; only the variable is hoisted according to var, let, or const, so the function cannot be invoked before the assignment occurs.*

# What is the difference between call(), apply(), and bind()?





