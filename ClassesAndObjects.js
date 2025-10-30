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