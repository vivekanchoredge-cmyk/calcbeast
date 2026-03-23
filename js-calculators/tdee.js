function calcTDEE(){

let bmr = document.getElementById("bmr").value;

let activity = document.getElementById("activity").value;

let tdee = bmr * activity;

document.getElementById("result").innerHTML =
"TDEE: " + tdee.toFixed(2) + " calories/day";

}