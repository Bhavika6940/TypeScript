"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: 'John',
    id: 1,
    email: 'abc@123'
};
let { name: userName, email: userLogin } = {
    name: 'John',
    id: 1,
    email: 'abc@123'
};
let employee = { name: "John", id: 1, email: "abc@123", salary: 1000 };
let [user1, user2, ...restUsers] = [{ name: 'John', id: 1, email: 'abc@123' }, { name: 'Mike', id: 2, email: 'xyz@123' }, { name: 'Mike3', id: 3, email: 'xyz@123' }, { name: 'Mike3', id: 4, email: 'xyz@123' }];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log(result);
//# sourceMappingURL=Interface.js.map