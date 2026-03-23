function calculateGoal(){

  let goal = parseFloat(document.getElementById("goal").value);
  let annualRate = parseFloat(document.getElementById("rate").value);
  let years = parseFloat(document.getElementById("years").value);

  let months = years * 12;

  // ✅ FIXED: Effective monthly rate
  let rate = Math.pow(1 + annualRate / 100, 1/12) - 1;

  let sip = goal / (((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate));

  let totalInvested = sip * months;
  let gains = goal - totalInvested;

  document.getElementById("result").innerHTML =
    "Required Monthly SIP: ₹" + sip.toFixed(0) +
    "<br>Total You Will Invest: ₹" + totalInvested.toFixed(0) +
    "<br>Your Gains: ₹" + gains.toFixed(0);

}