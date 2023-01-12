function callBack() {
  document.getElementById("button").disabled = false;
  console.log("this function is called");
}

function Throt(fun, time) {
  return function () {
    document.getElementById("button").disabled = true;
    setTimeout(() => {
      fun();
    }, time);
  };
}
const calling = Throt(callBack, 5000);
<<<<<<< HEAD
=======
// fjlsdjflsd

function gettingName(userName) {

  return userName;

}

const userName = gettingName("tejas")
>>>>>>> fb4d6c7621ae91230e2798312865e291f133ae40
