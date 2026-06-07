Primitive Values - copy by value

Objects Are Different - copy by reference

user1
   \
    ----> Object
   /
user2




Shallow copy = photocopy of a document that contains a sticky note saying "see attached file". You copied the document, but the sticky note still points to the same attached file. Change the file, and both copies are affected.


Deep copy = photocopy everything — document and the attached file. Completely independent.


| Method                         | Shallow / Deep |
| ------------------------------ | -------------- |
| `...obj`                       | Shallow        |
| `Object.assign()`              | Shallow        |
| `[...arr]`                     | Shallow        |
| `slice()`                      | Shallow        |
| `JSON.parse(JSON.stringify())` | Deep (limited) |
| `structuredClone()`            | Deep           |


