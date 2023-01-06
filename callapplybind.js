//call
//this will take a argument and attach a function in an argument

//apply
//this will take an array as an element

//bind

//assign the function copy using bind function

let student = {
  name: "tejas",
  age: 25,
  cgpa: 1,
};

let teacher = {
  name: "anil sir",
  age: 35,
  cgpa: 0.5,
};

function getEmail() {
  return (this.email = this.name + "@gmail.com");
}
function chooseSubject(sub1, sub2, sub3) {
  return sub1 + sub2 + sub3 + " selected";
}
console.log(getEmail.call(student));
console.log(chooseSubject.apply(teacher, ["math", "physics", "chemistry"]));
let bindData = getEmail.bind(student);
console.log(bindData);
bindData();
console.log(student);
