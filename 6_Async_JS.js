//Asynchrounous JavaScript Practice File
console.log("Asynchrounous JavaScript Practice File");
console.log("Demonstrating setTimeout function"); 
setTimeout(() => {
    console.log("This message is shown after 2 seconds");
}, 2000);
console.log("This message is shown immediately");
console.log("End of Asynchrounous JavaScript Practice File");
///------------------------------------------
//Async callback example
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }   
    , 1500);
}
console.log("Fetching data...");
fetchData((data) => {
    console.log("Data received:", data);
});
console.log("End of Async callback example");
// ///------------------------------------------
// //CALLBACK HELL EXAMPLE
function firstTask(callback) {
    setTimeout(() => {
        console.log("First task completed");
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log("Second task completed");
        callback();
    }, 1000);
}
function thirdTask(callback) {
    setTimeout(() => {
        console.log("Third task completed");
        callback();
    }, 1000);
}
console.log("Starting tasks...");
firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log("All tasks completed");
        });
    });
});
console.log("End of CALLBACK HELL EXAMPLE");
//------------------------------------------
//PROMISE EXAMPLE
const getPromise = () =>{//
   return new Promise((resolve,reject)=>{//
        console.log("RRK")
        // resolve("All Good")
        reject("Something went wrong")//simulating failure
    })
}
const ps = getPromise()
ps.then( ()=>{ console.log("getPromise successss")}  )
ps.catch( ()=>{console.log("Failure return of getPromise")})
//------------------------------------------
//promise chaining example  
function fetchNumber() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(5);
        }, 5000);
    });
}
fetchNumber().then((num) => {
    console.log("Fetched number:", num);
    return num * 2;
}).then((num) => {
    console.log("Doubled number:", num);
    return num + 3;
}).then((num) => {
    console.log("Final result after adding 3:", num);
});
//------------------------------------------
// Async/Await example
function fetchDataAsync() {//function that returns a promise
    return new Promise((resolve) => {
        setTimeout(() => {//simulating async data fetch
            resolve("Async/Await Data");
        }, 2000);
    });
}   
async function displayData() {//async function to handle promise
    console.log("Fetching data asynchronously...");
    // const data = await fetchDataAsync();
    const data = await fetchDataAsync()
    console.log("Data received:", data);
}
displayData();
//------------------------------------------
//IIFE for above async/await example    
function fetchDataAsync() {//function that returns a promise
    return new Promise((resolve) => {
        setTimeout(() => {//simulating async data fetch
            resolve("Async/Await Data from IIFE");
        }, 2000);
    });
}   
(async function displayData() {//async IIFE to handle promise
    console.log("Fetching data asynchronously using IIFE...");
    const data = await fetchDataAsync();
    console.log("Data received:", data);
})();
//------------------------------------------    
//End of Asynchrounous JavaScript Practice File