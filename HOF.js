//The function which take input as a function or return a function or do both things

//in react we can user hoc using hof introduced in javascript
let num = 4;
let num2 = 32;

Number.prototype.getSquare = function (x) {
  //this represents the current value
  return x(this);
};

const x = (n) => {
  return n * n;
};
let data = num.getSquare(x);
// console.log(data);
const data2 = num2.getSquare(x);
// console.log(data2);

let arr = [4, 53, 2, 4, 2, 23, 53];

Array.prototype.getDouble = function (y) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(y(this[i]));
  }
  return result;
};

const y = (value) => {
  return value * 2;
};

const res = arr.getDouble(y);
console.log(res);
