function calculateCI(){

let p = document.getElementById("principal").value;

let r = document.getElementById("rate").value / 100;

let t = document.getElementById("time").value;

let amount = p * Math.pow((1+r),t);

let ci = amount - p;

document.getElementById("result").innerHTML =
"Compound Interest: " + ci.toFixed(2);

}