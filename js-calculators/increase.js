function calcIncrease(){

let oldVal = document.getElementById("old").value;

let newVal = document.getElementById("new").value;

let change = ((newVal - oldVal) / oldVal) * 100;

document.getElementById("result").innerText =
"Increase: " + change.toFixed(2) + "%";

}