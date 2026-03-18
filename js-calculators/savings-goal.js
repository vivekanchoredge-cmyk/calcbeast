function calculateGoal(){

  let goal = parseFloat(document.getElementById("goal").value);
  let current = parseFloat(document.getElementById("current").value);
  let monthly = parseFloat(document.getElementById("monthly").value);
  let annualRate = parseFloat(document.getElementById("rate").value);

  // ✅ FIXED: Effective monthly rate
  let rate = Math.pow(1 + annualRate / 100, 1/12) - 1;

  let months = 0;
  let balance = current;

  while(balance < goal){
    balance = (balance + monthly) * (1 + rate);
    months++;
    if(months > 1000) break;
  }

  let years = (months / 12).toFixed(1);
  let totalInvested = monthly * months + current;
  let gains = goal - totalInvested;

  document.getElementById("result").innerHTML =
    "You will reach your goal in about " + years + " years." +
    "<br>Total Months: " + months +
    "<br>Total Invested: ₹" + totalInvested.toFixed(0) +
    "<br>Gains: ₹" + gains.toFixed(0);

}