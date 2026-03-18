function waterCalc(){

let w = document.getElementById("weight").value;

let water = w * 35;

document.getElementById("result").innerHTML =
"Recommended Water Intake: " + water + " ml/day";

}