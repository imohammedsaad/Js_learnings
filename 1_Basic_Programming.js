// ////////////////////////////////////////////////////////////////////
console.log(`1.---Create an array of 10 numbers and print  even numbers`);
// let arr=[];
// for(let i=0; i<10;i++){
//     arr[i]=i*7;
// }
// console.log(arr);
// for(let num of arr){
//     if(num%2==0) console.log(num)
// }
///////////////////////////////////
console.log(`2.---Store marks of students calculate the total & average.`)
// let marks = [];
// const n = parseInt(prompt("Enter No. Of Students: "));
// let i = 0;
// let sum = 0;
// while(i<n){
//     marks[i]= parseInt(prompt(`Enter marks of student ${i+1}`))
//     sum+=marks[i];
//     i++;
// }
// console.log(marks)
// console.log(`Total Marks  = ${sum}`);
// console.log(`Average Marks  = ${sum/i}`);
/////////////////////////////////////////////////////////////
console.log(`3.---Reverse an array manually (without reverse()). `)
// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr)
// let i = 0;
// let j = arr.length-1
// while(i<j){
//     temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp
//     i++;
//     j--;
// }
// console.log(arr)
///////////////////////////////////////////////////////////
console.log(`4.---Find Max in array`)
// let arr = [1,2,3,4,5,99,7,8,9,10];
// let MaxNum = -1;
// console.log(arr)
// for(num of arr){
//     if(num>MaxNum) MaxNum = num;
// }
// console.log(MaxNum)
//////////////////////////////////////////////////////////
console.log(`5.---Remove Duplicates from [1, 2, 2, 3, 4, 4, 5]`)
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let arr2 = []
// for(num of arr){
//     if(!(arr2.includes(num))) arr2.push(num);
// }
// console.log(arr2);
/////////////////////////////////////////////////////
console.log(`6.---Take a string and print its length.`)
// let str1 = (prompt("Enter String"))
// alert(`The length of string ${str1} is ${str1.length}`)
///////////////////////////////////////////////////////
console.log(`7.---Convert "hello world" → "Hello World" `);
// let str = "hello world ";
// let ans = "";
// for(let i = 0; i < str.length; i++){
//     if(i==0) ans += str[i].toUpperCase();
//     else if (str[i-1]==" ") ans += str[i].toUpperCase();
//     else ans+=str[i]
// }
// console.log(ans)
// /////////////////////////////////////////////////
console.log(`8.--- Check if "MADAM" is a palindrome`);
// let str = "MADAM";
// let i = 0;
// let j = str.length - 1;
// let isPalindrome = true;
// while (i < j) {
//     if (str[i] !== str[j]) {
//         isPalindrome = false;
//         break;
//     }
//     i++; j--;
// }
// if (isPalindrome) console.log(`The string ${str} is a PALINDROME`);
// else console.log(`The string ${str} is NOT a PALINDROME`);
//////////////////////////////////////////////////////////////
console.log(`9.--- Count Vowels in the String`);
// let str = "Hello World";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     let ch = str[i].toLowerCase();
//     if (ch === 'a' ||ch === 'e' || ch === 'i' || ch === 'o' ||ch === 'u') count++;
// }
// console.log(`The string "${str}" has ${count} vowels.`);
///////////////////////////////////////////////////////////////////
console.log(`10---Replace all spaces in "I love JavaScript" with -`)
// let str = "I love JavaScript"
// let str1= ""
// console.log(`Original string: ${str}`)
// for(let i = 0; i< str.length ; i++){
//     if(str[i]==" ") str1+="-";
//     else str1+=str[i]
// }
// console.log(`Modified string: ${str1}`)
///////////////////////////////////////////////////////////////
console.log(`11.---Write a function to check if a number is prime.`)
// let a = parseInt(prompt("Enter number: "));

// function isPrime(a){
//     for(let i=2; i<a-1;i++){
//         if(a%i==0) return 0;
//     }
//     return 1;
// }
// if(isPrime(a))console.log(`${a} is prime no.`);
// else console.log(`${a} is composite no.`);
////////////////////////////////////////////////////////////////////
console.log(`12.---Write a function to calculate factorial of a number.`)
// let n = parseInt(prompt("Enter number to find factorial: "))
// function fact(n){
//     if(n==0 || n==1) return 1;
//     return fact(n-1)*n;
// }
// console.log(`Factorial of ${n} is ${fact(n)}`)
///////////////////////////////////////////////////////////////////
console.log(`13.---Write a function to convert Celsius ↔ Fahrenheit.`)
// function convertTemperature(value, unit) {
//     if (unit === "C") {
//         return `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F`;
//     } else if (unit === "F") {
//         return `${value}°F = ${((value - 32) * 5/9).toFixed(2)}°C`;
//     } else {
//         return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
//     }
// }
/////////////////////////////////////////////////////////////////////////////
console.log(`14.---Write a function that returnsgreater of two numbers.`)
// function getGreater(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// let a = parseInt(prompt("Enter a: "))
// let b = parseInt(prompt(("Enter b: ")))
// console.log(`${getGreater(a, b)} is greater`)
///////////////////////////////////////////////////////////////////
console.log(`15.---Write a function to generate table of a given number.`)
// function tableOf(n){
//     for(let i=1; i<11;i++){
//         console.log(`${n} x ${i} = 6${n*i}`)
//     }
// }
// let n = parseInt(prompt("Enter number: "))
// tableOf(n)
///////////////////////////////////////////////////////////////////////////
console.log(`16.---Rewrite Q11 (prime check) using arrow functions`)
// let a = 11;
// const isPrime = (a)=>{
// for(let i=2; i<a-1 ; i++) 
//     if(a%i == 0) return false;
// return true;
// }
// console.log(isPrime(a))
////////////////////////////////////////////////////////////////////////////
console.log(`17.---Create a fn  to check if a string contains a word.`)
// const doesContain =(str,word)=> {return str.includes(word);}
// console.log(doesContain("I love JavaScript", "Java"))
///////////////////////////////////////////////////////////////////////////////
console.log(`18.---Write a HO fn: takes a fn & a no., applies it to nos 1–5.`)
// const multiply =(a,b)=>{
//     return a*b;
// }

// function table  (multiply,x){
//     const results = [];
//   for (let i = 1; i <= 5; i++) {
//     results.push(multiply(i, x));
//   }
//   return results;
// }
// console.log(table(multiply,5))
//////////////////////////////////////////////////////////////////////
console.log(`19.---Demonstrate scope of variables inside & outside a fn.`)
// const multiply =(a,b)=>{
    
//     let x= 10
//     console.log(x)
//     return a*b;
// }
// console.log(multiply(2,2))
// console.log(x)
/////////////////////////////////////////////////////////////////////////////
console.log(`20.---Write a fn that takes another fn as arg & executes it.`)
// let x =3
// const stqr = (x,square = (x)=>{return x*x}) => { 
//     console.log(square(x))
// }
// stqr(x) // here stqr uses default function as parameter
// const double = (n) => n * 2; 
// stqr(x, double); //special function is passed manually
//////////////////////////////////////////////////////////////////////////////////////
console.log(`21.---Given array use map to return squares of numbers.`)
// let  arr = [1, 2, 3, 4, 5];
// arr = arr.map(num => num*num)
// console.log(arr)
//////////////////////////////////////////////////////////////////////////////////////
console.log(`22.---Given arr use filter to keep only numbers > 18.`)
// let arr = [10, 15, 20, 25, 30];
// let adult = arr.filter((i)=>{if (i>18) return true})
// console.log(adult)
console.log(`23.---Use reduce to find sum of arr.`)
// let arr = [1, 2, 3, 4, 5];
// const SumArr = arr.reduce((accumulator,CurrVal)=>{return CurrVal+accumulator},0)
// console.log(SumArr)
///////////////////////////////////////////////////////////////////////////////////////////////
console.log(`24.---Use forEach to print each element of an array.`)
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(i => console.log(i));
//////////////////////////////////////////////////////////////////////////////////////////////////
console.log(`25.---filter student marks using filter who scored above 50.`)
// let arr = [150, 20, 345, 40, 50];
// arr.filter((i,idx)=> {if(i>50) console.log(idx+1) })
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////