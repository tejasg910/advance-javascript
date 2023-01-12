function getData(a) {
  const value = function () {
    a++;
    return a;
  };

  return value;
}

const res = getData(3);

console.log(res());
console.log(res());
console.log(res());
console.log(res());
