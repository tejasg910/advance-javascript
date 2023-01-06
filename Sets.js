//What are sets in javascript ?
//collection of unique values

let data = new Set([3, 5, "tejas", true, {}, 3]);

//you can access element like array here

data.forEach((element) => {
  console.log(typeof element === "number" ? element * 10 : element);
});

//how to add the data

data.add(32);

data.clear();

//how to delete the value

data.delete({});

console.log(data);
// console.log({} == {}); //false
// console.log([] == []); //false

for (x of data) {
  console.log(x);
}

//Array to set

let arr = [32, 523, 5, 2, 53, 2, 523, 5, 23, 12, 423];

let newSet = new Set(arr);

console.log(newSet);

//Set to array

let set = new Set([32, 23, 534, 65, 76, 45, 3, 5, 23, 65, 7, 56, 32]);
let newarr = [...set];

console.log(newarr);
