console.log("=========================OBJECTS BASICS===================")
console.log("1.---Create obj. student with keys: name, age, marks.Print all values. ")
// const student = {
//     name : "Mohammed Saad",
//     age : 20,
//     marks : 100,
// }
// console.log(student)
// for(let i in student) console.log(i, student[i])
console.log("2.--- Add a new property grade to the student object.")
// student.grade = "A+"; console.log(student)
console.log("3.---Update age of the student object.")
// student.age=21; console.log(student)
console.log("4.---Delete the marks property.")
// delete student.marks; console.log(student)
console.log("5.---Check if a property exists in the object using in operator.")
// for(i in student) if( i === "age") console.log("age exists")
// console.log("grade" in student)
/////////////////////////////////////////////////////////////////////
console.log("=========================Objects + Functions====================")
console.log("6.---Create an object calculator with methods: +,-,/,x")
// const calculator = {
//      add : (a,b)=> {return a+b},
//      sub : (a,b)=> {return a-b},
//      mul : (a,b)=> {return a*b},
//      div : (a,b)=> {return a/b},
// }
// console.log(calculator.add(2,3))
// console.log(calculator.mul(2,3))
// console.log(calculator.sub(2,3))
// console.log(calculator.div(2,3))
console.log("7.---Create a person object with name and a greet() method that says:")
// const person ={
//     name : this.name,
//     greet : (name) => {console.log(`Hello, my name is ${name}`)},
// }
// person.name = "saad";
// person.greet(person.name)
console.log("8.--- Write an object circle with radius that returns area.")
// const circle = {
//     radius : this.radius,
//     area : (radius) => {return 3.14*radius*radius}
// }
// console.log(circle.area(5))
console.log("9.---Write an object with methods to convert Celsius ↔ Fahrenheit.")
// const temperature = {
//     c : this.c,
//     f : (c) => {return ((c * (9/5)) + 32)}
// }
//   c = 32;
// console.log(`${c} Celcius in Farenhiet is = ${temperature.f(32)}`)
console.log("10.--- bankAccount operations ")
// const bankAccount = {
//     deposit : (amt) => balance+=amt,
//     withdraw : (amt) => balance-=amt,
// }

// let balance = 1000;
// console.log(`Current Balance = ${balance} `)
// bankAccount.deposit(500)
// console.log(`Deposited successfully!, Current Balance = ${balance} `)
// bankAccount.withdraw(75)
// console.log(`Withdrawl successful!, Current Balance = ${balance} `)
console.log("==========================Arrays of Objects=========================")

console.log("11.---Create an array of 5 student objects . Print names of all .")
const Students = [
    {
        name : "Haya Suleiman",
        marks : 99
    },
        {
        name : "Zumar Yusuf",
        marks : 100
    },
        {
        name : "Khadija gul",
        marks : 85
    },
        {
        name : "Aabdar abeed",
        marks : 78
    },
        {
        name : "Shehreen Kardar",
        marks : 40
    }
]
// console.log(Students)
// Students.forEach((i)=>console.log(i.name))

console.log("12.---Find the student with the highest marks from the array.")
// let topStudent = Students[0];
// Students.forEach(student => {if (student.marks > topStudent.marks) topStudent = student;});
// console.log("Top Student:", topStudent.name, "with", topStudent.marks, "marks");

console.log("13.---Calculate average marks of all students.")
// let sum=0
// Students.forEach(i => sum+=i.marks)
// console.log(avg = sum/Students.length)

console.log("14.---Filter students who scored more than 50.")
// Students.filter((i)=> {if(i.marks>50) console.log(i.name)})

console.log("15.---Create an arr of product objects & total cost of products")
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 75 },
//   { name: "Monitor", price: 300 },
// ];
// let totalCost = 0;
// for (let i = 0; i < products.length; i++) {
//   totalCost += products[i].price;
// }
// console.log(totalCost)
console.log("======================JSON & Looping Objects=======================")
// const cars = [
//     {
//         name : "Volkswagen POLO TDi",
//         OnRoadPrice : "45L"
//     },
//     {
//         name : "Volkswagen POLO TSi",
//         OnRoadPrice : "55L",
//         Ownership: "2nd"
//     },
//     {
//         name : "Volkswagen VENTO",
//         OnRoadPrice : "95L"
//     },
//         {
//         name : "Volkswagen Golf GT",
//         OnRoadPrice : "98L"
//     },
// ];

console.log("16.---Loop through a car object & print all keys:values using for-in.")
// for(i in cars){console.log(cars[i].name,":",cars[i].OnRoadPrice)}
// for(i of cars){console.log(i.name,":",i.OnRoadPrice)} //same
// // "in" returns INDEXES . "of" returns actual content

console.log("17.---Get all keys of a car object using Object.keys().")
// console.log(Object.keys(cars[0]))                  //Object.keys fn*****
// for(i in cars)console.log(Object.keys(cars[i]))

console.log("18.---Get all values of a car object using Object.values().")
// console.log(Object.values(cars[0]))                //Object.values fn*****
// for(i in cars)console.log(Object.values(cars[i]))
// for(i in cars)console.log(Object.entries(cars[i]))     //Object.values fn*****

console.log("19.---Convert a JS object to JSON string using JSON.stringify.")
// let jsonstring = JSON.stringify(cars)
// console.log(jsonstring)
// let prettyPrintJSON = JSON.stringify(cars,null,4)
// console.log(prettyPrintJSON)

console.log("20.---Convert a JSON string back to JS object using JSON.parse.")
// let backToObject = JSON.parse(jsonstring)
// console.log(backToObject)

console.log("==========================DOM Basics==========================")
