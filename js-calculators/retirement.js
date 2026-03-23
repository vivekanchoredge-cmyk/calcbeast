function calculateRetirement(){

  let age    = parseFloat(document.getElementById("age").value);
  let retire = parseFloat(document.getElementById("retire").value);
  let saving = parseFloat(document.getElementById("saving").value);
  let annualRate = parseFloat(document.getElementById("rate").value);

  let months = (retire - age) * 12;

  // ✅ FIXED: Effective monthly rate
  let rate = Math.pow(1 + annualRate / 100, 1/12) - 1;

  let futureValue  = saving * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
  let totalInvested = saving * months;
  let gains        = futureValue - totalInvested;

  document.getElementById("result").innerHTML =
    "Estimated Retirement Savings: ₹" + futureValue.toFixed(0) +
    "<br>Total Invested: ₹" + totalInvested.toFixed(0) +
    "<br>Total Gains: ₹" + gains.toFixed(0) +
    "<br>Years to Retire: " + (retire - age);

}