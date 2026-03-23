function calculatePercentage(){

let total = document.getElementById("total").value;

let percent = document.getElementById("percent").value;

let result = (total * percent) / 100;

document.getElementById("result").innerText =
"Result: " + result;

}