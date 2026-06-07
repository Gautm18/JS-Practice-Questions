// array.protoptype makes that all the available methods of the array are available to all the arrays in the code. So we can use map method on any array in our code.

// Array.prototype.gautam = function(callback){
//     callback(this);
// }

// const arr = [1, 2, 3];

// arr.gautam((e) => {
//     console.log(e);
// });


//to behave this like a map method we can do like this

Array.prototype.gautam = function(callback){
    const newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}

const arr = [1, 2, 3];
const result = arr.gautam((e) => {
    return e * 2;
}
);
console.log(result);