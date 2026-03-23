function calcTime(){

let start = document.getElementById("start").value;

let end = document.getElementById("end").value;

let s = new Date("1970-01-01T" + start);

let e = new Date("1970-01-01T" + end);

let diff = (e - s) / 60000;

document.getElementById("result").innerText =
"Difference: " + diff + " minutes";

}