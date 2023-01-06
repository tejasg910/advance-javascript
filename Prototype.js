//Prototype in javascript
//
Object.prototype.createUser = "this is user";
const users = {
  getEmail: function () {
    return this.name + this.birth;
  },
};

//lets create two objects

let student = {
  name: "tejas",
  birth: "2002",
  //   getEmail: users.getEmail,
};

student.__proto__ = users; //added in the prototype

console.log(student);

console.log(student.getEmail());
