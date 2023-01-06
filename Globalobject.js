//we are using the let and const then what is the use of var actually
// let is limited to only for the scope while var is not  it becomes global if we declare outside the scope
function getName() {
  var username = undefined;
  console.log(username);
  username = "sampleuser";
}

getName();
