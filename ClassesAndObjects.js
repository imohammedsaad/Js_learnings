//prototype in JavaScript
const Student = {
    marks: 100,
    disp: function(){
        console.log("Marks: " + this.marks);
    },
    display(){
        console.log("Hello from display method");
    }
}
//understanding __proto__
//Using disp method in object student1
const Student1 ={
    name: "John"
}
const Student2 ={
    name: "Doe"
}
Student1.__proto__=Student
Student2.__proto__=Student
//////////////////////////////////////////////////////

//Classes in JavaScript

class Car{//class definition
    start(){
        console.log("Car started");
    }
    stop(){//method
        console.log("Car stopped");
    }
    setBrand(brandName){ //setter method
        this.brand = brandName;//instance variable
    }
}

const Fortuner = new Car();//object creation
Fortuner.start();//method call
Fortuner.setBrand("Toyota");
console.log("Car Brand: " + Fortuner.brand);//setter method call
Fortuner.stop();//method call
//////////////////////////////////////////////////////

//Class with constructor
class Bike{
    constructor(bikeName){//constructor
        this.bikeName = bikeName;//instance variable
    }   
    displayBike(){
        console.log("Bike Name: " + this.bikeName);
    }
}

const Pulsar = new Bike("Pulsar");//object creation with parameter
Pulsar.displayBike();//method call

//////////////////////////////////////////////////////
//Class with inheritance

class Animal{//base class
    eat(){
        console.log("Animal is eating");
    }
}
class Dog extends Animal{//derived class
    bark(){
        console.log("Dog is barking");
    }
}
const labrador = new Dog();//object creation
labrador.eat();//inherited method call
labrador.bark();//derived class method call 
//////////////////////////////////////////////////////

//Class with static method
class MathUtil{
    static add(a, b){//static method
        return a + b;
    }
}
const sum = MathUtil.add(5, 10);//static method call without object creation
console.log("Sum: " + sum);
//////////////////////////////////////////////////////

//Class with getter and setter
class Person{
    setName(name){//setter method   
        this.name = name;//instance variable
    }
    getName(){//getter method
        return this.name;
    }
}
const person1 = new Person();//object creation
person1.setName("Alice");//setter method call
console.log("Person Name: " + person1.getName());//getter method call
//////////////////////////////////////////////////////
//Class with private fields
class BankAccount{
    #balance;//private field    
    constructor(initialBalance){
        this.#balance = initialBalance;
    }
    deposit(amount){
        this.#balance += amount;
    }   
    getBalance(){
        return this.#balance;
    }
}
const myAccount = new BankAccount(1000);//object creation
myAccount.deposit(500);
console.log("Account Balance: " + myAccount.getBalance());//method call
//////////////////////////////////////////////////////
//Super keyword in inheritance
class Parent{
    greet(){
        console.log("Hello from Parent");
    }
} 
class Child extends Parent{
    greet(){
        super.greet();//calling parent class method
        console.log("Hello from Child");
    }
}
const childObj = new Child();//object creation
childObj.greet();//method call
//////////////////////////////////////////////////////
//super() to call parent constructor
class Vehicle{
    constructor(type){  
        this.type = type;
    }
}
class Truck extends Vehicle{
    constructor(type, capacity){
        super(type);//calling parent constructor
        this.capacity = capacity;
    }
}
const myTruck = new Truck("Truck", 5000);//object creation
console.log("Vehicle Type: " + myTruck.type + ", Capacity: " + myTruck.capacity);
//////////////////////////////////////////////////////
// Note: In derived class constructor,
// its mandatory to call super() before using 'this' in derived class constructor
//////////////////////////////////////////////////////
