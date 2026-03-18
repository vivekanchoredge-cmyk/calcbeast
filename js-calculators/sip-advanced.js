function calculateSIP(){

let monthly = parseFloat(document.getElementById("monthly").value);

// ✅ FIXED: Effective monthly rate (annual compounding converted to monthly)
let annualRate = parseFloat(document.getElementById("rate").value);
let rate = Math.pow(1 + annualRate / 100, 1/12) - 1;

let years = parseFloat(document.getElementById("years").value);

let months = years * 12;

let futureValue = monthly * ((Math.pow(1+rate,months)-1)/rate) * (1+rate);

let invested = monthly * months;

let returns = futureValue - invested;

document.getElementById("invested").innerHTML =
"Total Invested: ₹" + invested.toFixed(0);

document.getElementById("returns").innerHTML =
"Estimated Returns: ₹" + returns.toFixed(0);

document.getElementById("value").innerHTML =
"Total Value: ₹" + futureValue.toFixed(0);

}