function bill(){

let units = document.getElementById("units").value;

let price = document.getElementById("price").value;

let total = units * price;

document.getElementById("result").innerText =
"Electricity Bill: ₹" + total;

}