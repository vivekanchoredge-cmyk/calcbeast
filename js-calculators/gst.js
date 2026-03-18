function calculateGST(){

let amount = document.getElementById("amount").value;

let gst = document.getElementById("gst").value;

let gstAmount = amount * gst / 100;

let final = parseFloat(amount) + gstAmount;

document.getElementById("result").innerText =
"GST: " + gstAmount + " | Total: " + final;

}