function calculateStepUp(){

  let sip      = parseFloat(document.getElementById("sip").value);
  let annualRate = parseFloat(document.getElementById("rate").value);
  let years    = parseInt(document.getElementById("years").value);
  let increase = parseFloat(document.getElementById("increase").value) / 100;

  // ✅ FIXED: Effective monthly rate
  let rate = Math.pow(1 + annualRate / 100, 1/12) - 1;

  let totalValue   = 0;
  let totalInvested = 0;
  let currentSIP   = sip;

  // ✅ FIXED: Month by month calculation (not yearly lump sum)
  for(let i = 0; i < years; i++){
    for(let m = 0; m < 12; m++){
      totalValue = (totalValue + currentSIP) * (1 + rate);
      totalInvested += currentSIP;
    }
    // Step up SIP every year
    currentSIP = currentSIP * (1 + increase);
  }

  let gains = totalValue - totalInvested;

  document.getElementById("result").innerHTML =
    "Estimated Investment Value: ₹" + totalValue.toFixed(0) +
    "<br>Total Invested: ₹" + totalInvested.toFixed(0) +
    "<br>Gains: ₹" + gains.toFixed(0);

}