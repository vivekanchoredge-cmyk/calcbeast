function compareInvestment(){

  let sip = parseFloat(document.getElementById("sip").value);
  let lump = parseFloat(document.getElementById("lump").value);
  let annualRate = parseFloat(document.getElementById("rate").value);
  let years = parseFloat(document.getElementById("years").value);
  let months = years * 12;

  // ✅ FIXED: Effective monthly rate for SIP
  let monthlyRate = Math.pow(1 + annualRate / 100, 1/12) - 1;

  let sipValue = sip * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  // ✅ Lump Sum — annual compounding (already correct)
  let lumpValue = lump * Math.pow(1 + annualRate / 100, years);

  let sipInvested = sip * months;
  let lumpInvested = lump;

  document.getElementById("sipResult").innerHTML =
    "SIP Value After " + years + " Years: ₹" + sipValue.toFixed(0) +
    "<br>Total Invested: ₹" + sipInvested.toFixed(0) +
    "<br>Gains: ₹" + (sipValue - sipInvested).toFixed(0);

  document.getElementById("lumpResult").innerHTML =
    "Lump Sum Value After " + years + " Years: ₹" + lumpValue.toFixed(0) +
    "<br>Total Invested: ₹" + lumpInvested.toFixed(0) +
    "<br>Gains: ₹" + (lumpValue - lumpInvested).toFixed(0);

}