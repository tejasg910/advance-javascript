//javascript map

//javascript map is alternative of the javascript object

//There are some limitations of the object
//key should be string
// key mapping is difficult
//counting size is difficult

//Map is advance object introduced with new features

//there are multiple methods in the Map to make easy work which is quitly difficult

//The performance is enhanced while doing some work like finding the size of the object

// syntax:
let data = new Map([
  ["name", "tejas"],
  [10, "The cgpa is 10"],
  [true, "success"],
]);

console.log(data); //showing the full map object
console.log(data.get(true)); //reading the data
console.log(data.set("gf", null)); //adding the data
data.set({ key: "this is value" }, { value: "this is another object" }); //this is power of the class Map object
console.log(data.size); //showing the size means the key and value pairs present in the Map object

// data.forEach((value, key) => {
//   console.log(key, value); //first argument is value and second the key
// });

// for (x of data) {
//   console.log(x); //show the array of key and values
//   console.log(x[0]); //will show the keys
//   console.log(x[1]); // will show the values
// }
// console.log(data.values());
for (x of data) {
  console.log("in for in");
  console.log(x);
}
// console.log(typeof data); //it shows as object
