//memoization is the method used to reduce the time for execution of the program
function Cal(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

const memo = (fun) => {
  let cache = {};
  return function (...arg) {
    let n = arg[0];
    if (n in cache) {
      const res = cache[n];
      return res;
    } else {
      const value = fun(n);
      cache[n] = value;
      return value;
    }
  };
};
console.time();
const data = memo(Cal);
const result = data(5);
console.log(result);
console.timeEnd();

console.time();
const newdata = memo(Cal);
const newresult = data(5);
console.log(newresult);
console.timeEnd();
