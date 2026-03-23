function fireCalc(){

let expenses = parseFloat(document.getElementById("expenses").value);
let savings = parseFloat(document.getElementById("savings").value);
let annual = parseFloat(document.getElementById("annual").value);
let rate = parseFloat(document.getElementById("rate").value)/100;

let target = expenses * 25;

let years = 0;

while(savings < target){

savings = (savings + annual) * (1 + rate);

years++;

if(years>100) break;

}

document.getElementById("result").innerHTML =
"You may reach financial independence in about " + years + " years.";

}