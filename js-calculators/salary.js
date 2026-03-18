function calculateSalary(){

let ctc = document.getElementById("ctc").value;

let tax = document.getElementById("tax").value;

let pf = document.getElementById("pf").value;

let taxAmount = ctc * tax / 100;

let pfAmount = ctc * pf / 100;

let netSalary = ctc - taxAmount - pfAmount;

let monthly = netSalary / 12;

document.getElementById("result").innerHTML =
"Annual In-Hand Salary: ₹" + netSalary.toFixed(2) +
"<br>Monthly In-Hand Salary: ₹" + monthly.toFixed(2);

}