/* DOM in JS */

let byTag = document.getElementsByTagName("h1");
let byId = document.getElementById("idNomi");
let byClass = document.getElementsByClassName("classNomi");
let bySelector = document.querySelector(".classNomi");
let bySelectorAll = document.querySelectorAll(".classNomi");
let byAll = document.getElementsByTagName("h1").namedItem("idNomi");

byAll.style.color = "yellow";
byAll.style.backgroundColor = "green";
byAll.style.width = "300px";
byAll.style.height = "250px";
byAll.style.fontSize = "40px";
byAll.style.paddingTop = "90px";
byAll.style.paddingLeft = "20px";
byAll.style.boxSizing = "border-box";
byAll.style.border = "10px solid black"


console.log(byAll);