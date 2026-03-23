function prob(){

let fav = document.getElementById("fav").value;

let total = document.getElementById("total").value;

let p = fav/total;

document.getElementById("result").innerText =
"Probability: "+p;

}