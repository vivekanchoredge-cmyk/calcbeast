function calculateDate(){

let start = new Date(document.getElementById("start").value);

let end = new Date(document.getElementById("end").value);

if(!start || !end){
alert("Please select both dates");
return;
}

let diff = end - start;

let days = diff / (1000 * 60 * 60 * 24);

document.getElementById("result").innerText =
"Difference: " + days + " days";

}