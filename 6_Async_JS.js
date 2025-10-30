//Asynchrounous JavaScript Practice File
// console.log("Asynchrounous JavaScript Practice File");
// console.log("Demonstrating setTimeout function"); 
// setTimeout(() => {
//     console.log("This message is shown after 2 seconds");
// }, 2000);
// console.log("This message is shown immediately");
// console.log("End of Asynchrounous JavaScript Practice File");
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
///------------------------------------------
//CALLBACK HELL EXAMPLE
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