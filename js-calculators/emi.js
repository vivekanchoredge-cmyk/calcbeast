function calculateEMI(){

let loan = document.getElementById("loan").value;

let rate = document.getElementById("rate").value;

let months = document.getElementById("months").value;

let r = rate / 100 / 12;

let emi = loan * r * Math.pow(1+r, months) / (Math.pow(1+r, months)-1);

document.getElementById("result").innerText =
"Monthly EMI: " + emi.toFixed(2);

}