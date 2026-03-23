function calculateSI(){

let p = document.getElementById("principal").value;

let r = document.getElementById("rate").value;

let t = document.getElementById("time").value;

let si = (p * r * t) / 100;

document.getElementById("result").innerHTML =
"Simple Interest: " + si;

}