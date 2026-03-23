function addFraction(){

let n1 = parseFloat(document.getElementById("num1").value);
let d1 = parseFloat(document.getElementById("den1").value);
let n2 = parseFloat(document.getElementById("num2").value);
let d2 = parseFloat(document.getElementById("den2").value);

if(!n1 || !d1 || !n2 || !d2){
document.getElementById("result").innerHTML = "Please enter all values";
return;
}

let num = (n1 * d2) + (n2 * d1);
let den = d1 * d2;

document.getElementById("result").innerHTML =
"Result: " + num + "/" + den;

}