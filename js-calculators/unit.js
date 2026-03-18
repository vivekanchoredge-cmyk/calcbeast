function convert(){

let meters = document.getElementById("meters").value;

let km = meters / 1000;

document.getElementById("result").innerText =
"Kilometers: " + km;

}