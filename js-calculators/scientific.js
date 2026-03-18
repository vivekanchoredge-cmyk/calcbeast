function calc(){

let exp = document.getElementById("display").value;

let result = eval(exp);

document.getElementById("result").innerHTML =
"Result: " + result;

}