function avg(){

let nums = document.getElementById("numbers").value.split(",");

let sum = 0;

for(let i=0;i<nums.length;i++){
sum += parseFloat(nums[i]);
}

let average = sum / nums.length;

document.getElementById("result").innerText =
"Average: " + average;

}