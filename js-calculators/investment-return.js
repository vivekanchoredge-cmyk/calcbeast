function calculateInvestment(){

  let initial    = parseFloat(document.getElementById("initial").value);
  let monthly    = parseFloat(document.getElementById("monthly").value);
  let annualRate = parseFloat(document.getElementById("rate").value);
  let years      = parseFloat(document.getElementById("years").value);
  let months     = years * 12;

  // ✅ FIXED: Effective monthly rate
  let rate = Math.pow(1 + annualRate / 100, 1/12) - 1;

  // ✅ FIXED: Initial lump sum + monthly SIP calculated separately then added
  let lumpFV = initial * Math.pow(1 + rate, months);
  let sipFV  = monthly * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);

  let futureValue   = lumpFV + sipFV;
  let totalInvested = initial + (monthly * months);
  let gains         = futureValue - totalInvested;

  document.getElementById("result").innerHTML =
    "Future Investment Value: ₹" + futureValue.toFixed(0) +
    "<br>Total Invested: ₹" + totalInvested.toFixed(0) +
    "<br>Total Gains: ₹" + gains.toFixed(0);

}