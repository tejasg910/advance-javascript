// function Addition(a, b, c) {
//   return a + b + c;
// }

// const res = Addition(2, 3, 4);

// console.log(res);

function Addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// const res = Addition(4);
// const res1 = res(3);
// const res2 = res1(4);
// console.log(res2);

const res = Addition(3)(4)(4);
// console.log(res);

let data = {
  name: "tejas",
  age: 20,
};

function showDetails(obj) {
  return function detail(key) {
    return obj[key];
  };
}

const user = showDetails(data)("age");
console.log(user);
