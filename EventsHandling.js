 
 ///////Change the text of a <p> element to "JavaScript is awesome!".
// Change the color of an <h1> to red.
// Replace the src of an <img> with another image.
// Create a button → when clicked, change background color to yellow.
 let  btn1 = document.getElementById("cartbtn")
 let CartQty=0
 btn1.onclick = ()=>{
    btn1.style.backgroundColor="green"
    btn1.innerText="Product Added To Cart✅"
    btn1.style.color="white"
    // alert("Product Added to Cart")
    CartQty++;
    document.getElementById("CartQty").innerText=`Cart Qauntity = ${CartQty}`
 }
 ///////////////////////////////////////////////////////////////////////////////////////
// 
// Create an input box + button → when button is clicked, display input text on page.
const inputElement = document.createElement('input')
inputElement.setAttribute('type','text')
inputElement.setAttribute('placeholder', 'Enter some text...');
inputElement.setAttribute('id', 'myDynamicInput');
document.getElementById("CartQty").appendChild(inputElement);

const displayBtn = document.createElement('button')
displayBtn.innerText="DISPLAY"
displayBtn.setAttribute('id','DispBtn')
document.getElementById("CartQty").appendChild(displayBtn)

displayBtn.onclick=()=>{
   alert("Button clicked")
}


const BuyNow = document.getElementById("bg-btn");

// BuyNow.onclick=()=>{
//    BuyNow.style.backgroundColor = "red";
// }
/// Same as:
BuyNow.addEventListener("click", () => {
   if(BuyNow.style.backgroundColor === "red"){
      BuyNow.style.backgroundColor = "green";
      BuyNow.innerText="Purchased"  
      return;
   }else{
   BuyNow.style.backgroundColor = "red";
   BuyNow.innerText="Buy Now"
}
});
