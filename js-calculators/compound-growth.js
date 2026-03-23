function compoundCalc(){

  let principal  = parseFloat(document.getElementById("principal").value);
  let annualRate = parseFloat(document.getElementById("rate").value);
  let years      = parseFloat(document.getElementById("years").value);
  let monthly    = parseFloat(document.getElementById("monthly").value);
  let months     = years * 12;

  // ✅ FIXED: Effective monthly rate
  let rate = Math.pow(1 + annualRate / 100, 1/12) - 1;

  // ✅ FIXED: Principal aur monthly contribution alag alag calculate karo
  let lumpFV = principal * Math.pow(1 + rate, months);
  let sipFV  = monthly * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);

  let future        = lumpFV + sipFV;
  let totalInvested = principal + (monthly * months);
  let gains         = future - totalInvested;

  document.getElementById("result").innerHTML =
    "Future Value: ₹" + future.toFixed(0) +
    "<br>Total Invested: ₹" + totalInvested.toFixed(0) +
    "<br>Total Gains: ₹" + gains.toFixed(0);

}