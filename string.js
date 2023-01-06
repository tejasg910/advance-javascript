let str = "This is string";

// let arr = str.split("");
// console.log(arr);

// let replace = str.replace(/i/g, "o");
// console.log(replace);

//how to calculate the substring present in the string

let str1 =
  "this is sample stringthis is sample string this is sample string this is sample string this is sample string this is sample string this is sample string this is sample string  ";
console.time("first");
let newstr = str1.slice(1);
console.timeEnd("first");

console.time("second");
let newstr1 = str1.substring(1);
console.timeEnd("second");

let str3 = "      the is        ";
console.log(str3.trimEnd());
console.log(str3.trimStart());

let arr1 = [];
let arr2 = [];
console.log(arr1 === arr2);
