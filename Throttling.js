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
