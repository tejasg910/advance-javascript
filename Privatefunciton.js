//Private function in javascript
//Javascript introduced the private functions in classes

class User {
  name = "tejas";
  age = 25;
  #dob = "12/12/2001";
  #generateOTP() {
    return "3290390";
  }
  getDetails() {
    const otp = this.#generateOTP();
    return this.name + this.age + this.#dob + otp;
  }
}

const user1 = new User();

console.log(user1);

console.log(user1.getDetails());

let obj = {
  name: "tejas",
  lastname: "giri",
};

Object.defineProperty(obj, "dob", { enumerable: false, value: "240502" });
for (i in obj) {
  console.log(obj[i]);
}
console.log(obj.dob); //will show still you have enumerable false act like hidden

let arr = [22, 532, 523];
Array.prototype.getArray = function () {
  console.log("this is array");
};

let arr2 = [23, 54, 45, 3];
console.log(arr2);
