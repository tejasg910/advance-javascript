//What is big int in javascript

//big int is big brother of number

// If we are not able to handle the number then big int enters in the chat

let x1 = 32810384082080840380299439330838029094039304;
let x2 = 32810384082080840380299439330838029094039304;

let y = 32810384082080840380299439330838029094039304n;

let z = BigInt(x1 * x2);
console.log(x1);
console.log(y); //here y is big int
console.log(z);

//you can also multiply both big int values

let value1 = 3232n;
let value2 = 432n;
console.log(value1 * value2);

//Limitations of the big int

//you will not get the float value while dividation

console.log(value1 / value2);

//You can not use Math function

//You can not convert bigint into normal number using + operator
