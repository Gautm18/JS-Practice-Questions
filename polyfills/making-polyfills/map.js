// Array.prototype.myMap = function(callback) {
//   const result = [];

//   for(let i = 0; i < this.length; i++) {
//     result.push(
//       callback(this[i], i, this)
//     );
//   }

//   return result;
// };


// const arr = [1,2,3];

// const output =
//   arr.myMap(num => num * 2);

// console.log(output);

//======================================================================================================

// we can write like this as well, but what if we have multiple arrays in our code, then we have to write this function for every array, so to avoid that we can use prototype of array and add this method to it, so that all the arrays in our code can use this method without writing it again and again.


const arr = [1,2,3];

 const myMap = (callback) =>  {
  const result = [];

  for(let i = 0; i < arr.length; i++) {
    result.push(
      callback(arr[i], i, arr)
    );
  }

  return result;
};



const output =
  myMap(num => num * 2);

console.log(output);