let counter = 0;
function callFun() {
  console.log("this is called ", counter++);
}

function myDebounce(call, time) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, time);
  };
}

const BetterFunction = myDebounce(callFun, 500);
console.log(BetterFunction);
