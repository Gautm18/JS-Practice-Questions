=========================================================================================
# data types
Primitive Values - copy by value

Objects Are Different - copy by reference

user1
   \
    ----> Object
   /
user2


==========================================================================================

# defination




Shallow copy = photocopy of a document that contains a sticky note saying "see attached file". You copied the document, but the sticky note still points to the same attached file. Change the file, and both copies are affected.


Deep copy = photocopy everything — document and the attached file. Completely independent.

===========================================================================================================================


| Method                         | Shallow / Deep |
| ------------------------------ | -------------- |
| `...obj`                       | Shallow        |
| `Object.assign()`              | Shallow        |
| `[...arr]`                     | Shallow        |
| `slice()`                      | Shallow        |
| `JSON.parse(JSON.stringify())` | Deep (limited) |
| `structuredClone()`            | Deep           |


=============================================================================================================================

# spread operator only copies the first level.
user1
|
| name -> copied
|
| address ----------+
                    |
                    v
                Same Object
                    ^
                    |
user2 --------------+

# example :-
const user1 = {
  name: "Gautam",

  address: {
    city: "Bangalore"
  }
};

const user2 = {
  ...user1
};

user2.address.city = "Delhi";

console.log(user1.address.city);

# output - Delhi

==========================================================================================================
# shallow copy
Copies first level only.
Nested objects are shared.

# deep copy 
Copies everything recursively.
Nothing is shared.

===========================================================================================================


A shallow copy creates a new top-level object but keeps references to nested objects. A deep copy recursively copies all nested objects so that no references are shared between the original and the copy.