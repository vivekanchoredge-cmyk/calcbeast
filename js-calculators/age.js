function calculateAge(){

let birthDate = new Date(document.getElementById("birthDate").value);

let today = new Date();

let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

if(days < 0){
months--;
let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
days += lastMonth.getDate();
}

if(months < 0){
years--;
months += 12;
}

/* total days */

let diff = today - birthDate;
let totalDays = Math.floor(diff / (10006060*24));

document.getElementById("result").innerHTML =
"Age: " + years + " Years " + months + " Months " + days + " Days" +
"<br>Total Days: " + totalDays;

}