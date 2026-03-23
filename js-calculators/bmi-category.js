function bmiCat(){

let w = document.getElementById("weight").value;

let h = document.getElementById("height").value;

let bmi = w/(h*h);

let category="";

if(bmi<18.5) category="Underweight";
else if(bmi<25) category="Normal";
else if(bmi<30) category="Overweight";
else category="Obese";

document.getElementById("result").innerText =
"BMI: "+bmi.toFixed(2)+" ("+category+")";

}