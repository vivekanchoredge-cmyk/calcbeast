function calculateSIP(){

let investment = document.getElementById("investment").value;

let rate = document.getElementById("rate").value;

let years = document.getElementById("years").value;

let months = years * 12;

let r = rate / 100 / 12;

let futureValue =
investment *
((Math.pow(1+r, months)-1)/r) *
(1+r);

document.getElementById("result").innerText =
"Future Value: ₹" + futureValue.toFixed(2);

}