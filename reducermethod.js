const data = [2, 3, 4, 5];

const res = data.reduce((acc, current) => {
  return acc + current;
});

console.log(res);

const newArr = [32, 4, 2, 3, 4];
const resArr = newArr.reduce((acc, curr) => acc + curr);

console.log(resArr);

function addTwoNum(a, b) {
  return a + b;
}

console.log(addTwoNum(3, 4));
