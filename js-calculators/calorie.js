function calculateCalories(){

let gender = document.getElementById("gender").value;

let age = document.getElementById("age").value;

let weight = document.getElementById("weight").value;

let height = document.getElementById("height").value;

let unit = document.getElementById("unit").value;

let activity = document.getElementById("activity").value;

/* convert height to cm */

if(unit=="meter"){
height = height * 100;
}

if(unit=="feet"){
height = height * 30.48;
}

let bmr;

if(gender=="male"){
bmr = 10*weight + 6.25*height - 5*age + 5;
}else{
bmr = 10*weight + 6.25*height - 5*age - 161;
}

let calories = bmr * activity;

document.getElementById("result").innerText =
"Daily Calories Needed: " + calories.toFixed(0);

}