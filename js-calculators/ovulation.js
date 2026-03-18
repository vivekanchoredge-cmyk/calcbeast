function calcOvulation(){

let date = new Date(document.getElementById("cycle").value);

date.setDate(date.getDate() + 14);

document.getElementById("result").innerHTML =
"Estimated Ovulation Date: " + date.toDateString();

}