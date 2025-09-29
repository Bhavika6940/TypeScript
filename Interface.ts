export interface User {
    name: string;
    age?: number;
    id: number;
    email: string

}

let user: User = {
    name: 'John',
    id: 1,
    email: 'abc@123'
}

let { name: userName, email: userLogin }: User = {
    name: 'John',
    id: 1,
    email: 'abc@123'
}

interface Employee extends User {
    salary: number;
}
let employee: Employee = { name: "John", id: 1, email: "abc@123", salary: 1000 };

export interface Login {
    Login(): User;
}

let [user1, user2, ...restUsers]: User[] = [{ name: 'John', id: 1, email: 'abc@123' }, { name: 'Mike', id: 2, email: 'xyz@123' }, { name: 'Mike3', id: 3, email: 'xyz@123' }, { name: 'Mike3', id: 4, email: 'xyz@123' }]

console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3)
console.log(result);