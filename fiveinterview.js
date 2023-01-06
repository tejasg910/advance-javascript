// 1. Just fix the length at particular point

let data = [53, 52, 52, 63, 63, 634, 32];
data.length = 3; //only three will be sorted out
console.log(data);

//2. count the sum of array
let newdata = [1, 2, 4];
let sum = newdata.reduce((x, y) => {
  return x + y;
});

console.log(sum);

//3. sort new elements only

let unique = new Set(data);
console.log([...unique]); //this will return only unique numbers

//4. comma operator
//it is written like this ()

let x = 5;
x = ((x += 20), x); //the first argument will calculate and second will return

console.log(x);

//5. swapping using ternary operator
let a = 4;
let b = 23;
[a, b] = [b, a];
console.log(a, b);
