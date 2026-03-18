function calculateTip(){

let bill = document.getElementById("bill").value;

let tip = document.getElementById("tip").value;

let result = bill * tip / 100;

document.getElementById("result").innerText =
"Tip Amount: " + result;

}