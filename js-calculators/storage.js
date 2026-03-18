function convert(){

let mb = document.getElementById("mb").value;

let gb = mb / 1024;

document.getElementById("result").innerText =
"GB: " + gb;

}