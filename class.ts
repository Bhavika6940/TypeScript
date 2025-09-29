interface Address{
    street : string;
    city: string ;
    state : string;
    pin: string;
};
class Employee{
    protected id: number;
    name : string;
    address : Address;
    constructor(id : number, name: string , address : Address){
        this.id = id;
        this.address = address;
        this.name = name;
    }
    static getEmployeeCount() : number{
        return 50;
    }
    getNameWithAddress() : string{
        // return this.name + " " +this.address;

        return `${this.name} stays at ${this.address}`
    }
    get empId() : number{
        return this.id;
    }
    set empId(id : number){
       this.id = id;
    }

}                                                          
 class Manager extends Employee {
    constructor(id : number,name: string , address: Address){
        super(id,name, address);
    }
     getNameWithAddress() : string{
        

        return `${this.name} is a manager at ${this.address}`
    }
 }
 

let john = new Employee(1,'John',{
    street : "ABC",
    city : "Banglore",
    state : "Karnataka",
    pin:"456778"
});
console.log(john.getNameWithAddress());
console.log(Employee.getEmployeeCount());
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway71'

console.log(john);

let mike = new Manager(2,'Mike','Malviya Nagar')
console.log(mike. getNameWithAddress())
john.empId = 100;
console.log(john);
console.log(john.empId);