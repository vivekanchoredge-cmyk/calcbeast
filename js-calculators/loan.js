function calculateLoan(){

let loan = document.getElementById("loan").value;

let rate = document.getElementById("rate").value;

let time = document.getElementById("time").value;

let interest = (loan * rate * time) / 100;

let total = parseFloat(loan) + interest;

document.getElementById("result").innerText =
"Total Payable: " + total;

}