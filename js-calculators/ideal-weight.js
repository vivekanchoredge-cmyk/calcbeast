function idealWeight(){

let h = document.getElementById("height").value;
let g = document.getElementById("gender").value;

let weight;

if(g=="male"){
weight = 50 + 0.9*(h-152);
}else{
weight = 45.5 + 0.9*(h-152);
}

document.getElementById("result").innerHTML =
"Ideal Weight: " + weight.toFixed(2) + " kg";

}