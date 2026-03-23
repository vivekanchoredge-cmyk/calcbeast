function generate(){

let min = parseInt(document.getElementById("min").value);

let max = parseInt(document.getElementById("max").value);

let num = Math.floor(Math.random() * (max-min+1)) + min;

document.getElementById("result").innerText =
"Random Number: " + num;

}