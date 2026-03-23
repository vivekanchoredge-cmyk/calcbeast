function area(){

let length = document.getElementById("length").value;

let width = document.getElementById("width").value;

let area = length * width;

document.getElementById("result").innerText =
"Area: " + area + " sq ft";

}