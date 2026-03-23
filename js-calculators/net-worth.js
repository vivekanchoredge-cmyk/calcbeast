function netWorth(){

let assets = parseFloat(document.getElementById("assets").value);
let liabilities = parseFloat(document.getElementById("liabilities").value);

let worth = assets - liabilities;

document.getElementById("result").innerHTML =
"Your Net Worth: ₹" + worth.toFixed(0);

}