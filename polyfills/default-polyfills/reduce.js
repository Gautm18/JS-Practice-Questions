// reduce() = Combine Everything Into One Value

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const arr = [0, 2, 3, 4];
const result = arr.reduce((acc, item) => {acc + item, 0
});

console.log(result);

