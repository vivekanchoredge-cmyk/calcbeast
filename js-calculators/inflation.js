function calculateInflation() {

let amount = document.getElementById("amount").value;
let rate = document.getElementById("rate").value;
let years = document.getElementById("years").value;

// Convert to numbers
amount = parseFloat(amount);
rate = parseFloat(rate);
years = parseFloat(years);

// Validation
if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
alert("Please enter valid numbers");
return;
}

// Inflation calculation
let futureValue = amount / Math.pow((1 + rate / 100), years);

// Round value
futureValue = futureValue.toFixed(2);

// Show result
document.getElementById("result").innerHTML =
"Future Value After Inflation: ₹" + futureValue;

}