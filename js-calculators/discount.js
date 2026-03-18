function calculateDiscount(){

let price = document.getElementById("price").value;

let discount = document.getElementById("discount").value;

let result = price - (price * discount / 100);

document.getElementById("result").innerText =
"Final Price: " + result;

}