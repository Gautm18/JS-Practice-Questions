Array.prototype.myFilter = function(callback) {
  const result = [];

  for(let i = 0; i < this.length; i++) {

    if(callback(this[i], i, this)) {
      result.push(this[i]);
    }

  }

  return result;
};

const arr = [1,2,3,4];

const output =
  arr.myFilter(num => num % 2 === 0);

console.log(output);