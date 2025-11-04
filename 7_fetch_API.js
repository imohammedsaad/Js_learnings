//fetch API data using Fetch API and handle promises
console.log("Fetch API Practice File");
const URL = "https://catfact.ninja/facts";
const factPara = document.getElementById("para")
const btn = document.querySelector("#btn")

// const getFacts = async() => {//async function to use await
//     console.log("calling...........")
//     const promise = await fetch(URL);//waiting for fetch to complete
//     console.log(promise);
//     const Data = await promise.json();//waiting for json conversion
//     console.log("Data fetched from API:");
//     console.log(Data.data[1].fact);//logging the 'data' array from the response
//     const x = Data.data[1].fact
//     factPara.innerText=x
// }

function getFacts(){
    fetch(URL)
    .then((response)=>{ 
        data = response.json()
        return data
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText=data.data[0].fact
    })
}

btn.addEventListener("click",getFacts);


//End of Fetch API Practice File