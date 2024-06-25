interface User {
    name: String,
    age: number
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

const a = sumOfAge({ name: "Mihir", age: 20 }, { name: "kate", age: 20 });
console.log(a);
