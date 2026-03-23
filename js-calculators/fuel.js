function fuel(){

let distance = document.getElementById("distance").value;

let mileage = document.getElementById("mileage").value;

let price = document.getElementById("price").value;

let litres = distance / mileage;

let cost = litres * price;

document.getElementById("result").innerText =
"Fuel Cost: " + cost;

}