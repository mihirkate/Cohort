"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const a = sumOfAge({ name: "Mihir", age: 20 }, { name: "kate", age: 20 });
console.log(a);
