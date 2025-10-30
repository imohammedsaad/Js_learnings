document.getElementById("main-heading").innerText="iPhone 17e "
// 21.---Change the text of a <p> element to JavaScript is awesome!")
 let change = document.getElementById("text-paragraph").innerText="Designed and mktd. by Apple Inc."
 console.log(change)
 //DOM Manipulations: 
 ////---accessing and changing
document.querySelector("h1").style.color="blue"
document.getElementById("practice-img").setAttribute("src", "./inline2.jpg");
document.querySelector("img").setAttribute("border","2px solid black")
document.getElementById("bg-btn").innerText="Buy Now"
document.querySelector("button").style.borderRadius="6px"

/////---adding (create  first and then add)-----
newbtn = document.createElement("button")
newbtn.setAttribute("id","cartbtn")
newbtn.innerText="Add to Cart"
newbtn.style.borderRadius="6px"
let node = document.querySelector("div")
node.append(newbtn)
// node.prepend(newbtn)
// node.before(newbtn)
// node.after(newbtn)

////---deleting:--------
// node.remove()

////-- class.add() and class.remove()


