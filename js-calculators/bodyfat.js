function bodyFat(){

let weight = document.getElementById("weight").value;

let height = document.getElementById("height").value;

let age = document.getElementById("age").value;

let bmi = weight / ((height/100)*(height/100));

let fat = (1.20*bmi) + (0.23*age) - 16.2;

document.getElementById("result").innerText =
"Body Fat: " + fat.toFixed(2) + "%";

}