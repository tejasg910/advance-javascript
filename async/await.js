async function getUserData() {
  console.log("Fetching user data...");
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await response.json();
  console.log("Received user data");
  return data;
}

console.log("Start");
getUserData(1);
console.log("End");
