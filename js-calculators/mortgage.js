function mortgage(){

let loan = document.getElementById("loan").value;

let rate = document.getElementById("rate").value /100/12;

let months = document.getElementById("years").value * 12;

let emi = loan * rate * Math.pow(1+rate,months) / (Math.pow(1+rate,months)-1);

document.getElementById("result").innerText =
"Monthly Payment: ₹" + emi.toFixed(2);

}