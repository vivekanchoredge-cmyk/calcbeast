function calculateBMR(){

let w = parseFloat(document.getElementById("weight").value);
let h = parseFloat(document.getElementById("height").value);
let a = parseFloat(document.getElementById("age").value);
let g = document.getElementById("gender").value;

if(!w || !h || !a){
document.getElementById("result").innerHTML =
"Please enter all values";
return;
}

let bmr;

if(g === "male"){
bmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
}else{
bmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
}

document.getElementById("result").innerHTML =
"BMR: <b>" + bmr.toFixed(2) + " calories/day</b>";

}