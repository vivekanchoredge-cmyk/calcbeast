function split(){

let bill = document.getElementById("bill").value;

let people = document.getElementById("people").value;

let each = bill/people;

document.getElementById("result").innerText =
"Each Person Pays: ₹"+each;

}