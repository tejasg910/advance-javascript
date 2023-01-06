//when we try to copy the object just by using the assigning the method it will refer the memory point
// shallow copy

//The first layer's value will be copied using shallow copy
//but if there is nested object then it will not copied
//two methods to do the shallow copy
//1. Object destructuring
//2. Object.assign({}, obj_name)

// let obj = {
//   name: "tejas",
//   age: 428320,
// };

// let newobj = obj;  //refers the same memory location
// let newobj = Object.assign(obj);

// newobj.age = 20;
// console.log(obj);

let obj = {
  name: "tejas",
  age: 428320,
};

// let newobj = Object.assign({}, obj); //this will refer to the new created object not the previous one
// let newobj = { ...obj }; //this is also called the shallow copy
// newobj.age = 20;
// console.log(obj);

//Deep copy
//all values including nested objects will be copied using deep copy
// but Date will not copied although the current string will be copied instead of real date.
//for that we can use external package named as loadash package
let newobj = JSON.parse(JSON.stringify(obj));
console.log(newobj);
