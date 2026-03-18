function breakdown(){

let loan = document.getElementById("loan").value;

let rate = document.getElementById("rate").value;

let years = document.getElementById("years").value;

let interest = loan * rate * years /100;

let total = parseFloat(loan) + interest;

document.getElementById("result").innerHTML =
"Interest: ₹"+interest+"<br>Total Payment: ₹"+total;

}