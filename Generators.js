//Generator functions are pause and execute type functions

function* fun() {
  yield 10;
  yield 3232;
}

const f = fun();
console.log(f.next());
console.log(f.next());
console.log(f.next());
