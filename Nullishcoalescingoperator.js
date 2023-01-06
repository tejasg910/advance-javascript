let users = {
  student: {
    name: " ",
    age: 0,
  },
};

// console.log(users.student.name || "unknown");
// console.log(users.student.age || 21);

console.log(users.student.name ?? "unknown");
console.log(users.student.age ?? 21);

//Nullish operator checks the condition with null and undefined
