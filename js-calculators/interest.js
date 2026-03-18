function calculateInterest(){

let p = document.getElementById("principal").value;

let r = document.getElementById("rate").value;

let t = document.getElementById("time").value;

let interest = (p * r * t) / 100;

document.getElementById("result").innerText =
"Interest: " + interest;

}