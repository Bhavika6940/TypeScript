"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.address = address;
        this.name = name;
    }
    static getEmployeeCount() {
        return 50;
    }
    getNameWithAddress() {
        // return this.name + " " +this.address;
        return `${this.name} stays at ${this.address}`;
    }
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
}
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let john = new Employee(1, 'John', 'Highway71');
console.log(john.getNameWithAddress());
console.log(Employee.getEmployeeCount());
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway71'
console.log(john);
let mike = new Manager(2, 'Mike', 'Malviya Nagar');
console.log(mike.getNameWithAddress());
john.empId = 100;
console.log(john);
console.log(john.empId);
//# sourceMappingURL=class.js.map