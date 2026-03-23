function calcDueDate(){

let lmp = new Date(document.getElementById("lmp").value);

let dueDate = new Date(lmp);

dueDate.setDate(dueDate.getDate() + 280);

document.getElementById("result").innerHTML =
"Estimated Due Date: " + dueDate.toDateString();

}