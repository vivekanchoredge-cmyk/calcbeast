function speed(){

let distance = document.getElementById("distance").value;

let time = document.getElementById("time").value;

let speed = distance / time;

document.getElementById("result").innerText =
"Speed: " + speed + " km/h";

}