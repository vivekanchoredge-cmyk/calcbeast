// ─── Lump Sum Rows ────────────────────────────────────────────────
let lumpsumCount = 0;

function addLumpsumRow() {
  lumpsumCount++;
  const id = lumpsumCount;
  const totalYears = parseInt(document.getElementById('total-years').value) || 30;
  const div = document.createElement('div');
  div.className = 'lumpsum-entry';
  div.id = 'lump-row-' + id;
  div.innerHTML = `
    <div class="form-group">
      <label>Year (1 – ${totalYears})</label>
      <input type="number" id="lump-year-${id}" placeholder="e.g. 3" min="1" max="${totalYears}">
    </div>
    <div class="form-group">
      <label>Month (1–12)</label>
      <select id="lump-month-${id}">
        <option value="1">January (1)</option>
        <option value="2">February (2)</option>
        <option value="3">March (3)</option>
        <option value="4">April (4)</option>
        <option value="5">May (5)</option>
        <option value="6">June (6)</option>
        <option value="7">July (7)</option>
        <option value="8">August (8)</option>
        <option value="9">September (9)</option>
        <option value="10">October (10)</option>
        <option value="11">November (11)</option>
        <option value="12">December (12)</option>
      </select>
    </div>
    <div class="form-group">
      <label>Lump Sum Amount (₹)</label>
      <input type="number" id="lump-amt-${id}" placeholder="e.g. 50000" min="0">
    </div>
    <button class="remove-btn" onclick="removeLumpsum(${id})">✕ Remove</button>
  `;
  document.getElementById('lumpsum-list').appendChild(div);
}

function removeLumpsum(id) {
  const el = document.getElementById('lump-row-' + id);
  if (el) el.remove();
}

// ─── Format INR ───────────────────────────────────────────────────
function fmt(n) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

// ─── Main Calculation ─────────────────────────────────────────────
function calculateAll() {
  const sipAmt     = parseFloat(document.getElementById('sip-amount').value) || 0;
  const annualRate = parseFloat(document.getElementById('annual-rate').value);
  const totalYrs   = parseInt(document.getElementById('total-years').value);
  const extraMths  = parseInt(document.getElementById('extra-months').value) || 0;

  if (!annualRate || !totalYrs) {
    alert('Please enter Annual Return Rate and Investment Duration.');
    return;
  }

  const totalMonths = totalYrs * 12 + extraMths;

  // CAGR-based monthly rate
  const r = Math.pow(1 + annualRate / 100, 1 / 12) - 1;

  // ─── Collect Lump Sums ────────────────────────────────────────
  const lumpsumMap = {};
  let totalLumpInvested = 0;

  document.querySelectorAll('.lumpsum-entry').forEach(entry => {
    const id  = entry.id.replace('lump-row-', '');
    const yr  = parseInt(document.getElementById('lump-year-' + id).value);
    const mo  = parseInt(document.getElementById('lump-month-' + id).value);
    const amt = parseFloat(document.getElementById('lump-amt-' + id).value);
    if (!yr || !mo || !amt || isNaN(amt)) return;
    const absMonth = (yr - 1) * 12 + mo;
    if (absMonth < 1 || absMonth > totalMonths) return;
    lumpsumMap[absMonth] = (lumpsumMap[absMonth] || 0) + amt;
    totalLumpInvested += amt;
  });

  // ─── Month-by-month simulation ────────────────────────────────
  let portfolioValue    = 0;
  let sipInvestedSoFar  = 0;
  let lumpInvestedSoFar = 0;

  const MONTHS_NAME = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let tableHTML = '';

  for (let m = 1; m <= totalMonths; m++) {
    portfolioValue = (portfolioValue + sipAmt) * (1 + r);
    sipInvestedSoFar += sipAmt;

    const lumpThisMonth = lumpsumMap[m] || 0;
    if (lumpThisMonth > 0) {
      portfolioValue    += lumpThisMonth * (1 + r);
      lumpInvestedSoFar += lumpThisMonth;
    }

    const yearNum    = Math.ceil(m / 12);
    const monthLabel = MONTHS_NAME[(m - 1) % 12];
    const isLastMonth = (m === totalMonths);
    const isYearEnd   = (m % 12 === 0);

    if (isYearEnd || isLastMonth || lumpThisMonth > 0) {
      const rowClass    = lumpThisMonth > 0 ? 'lump-row' : '';
      const lumpDisplay = lumpThisMonth > 0 ? fmt(lumpThisMonth) : '—';
      tableHTML += `
        <tr class="${rowClass}">
          <td>Year ${yearNum}</td>
          <td>${monthLabel}</td>
          <td>${fmt(sipInvestedSoFar)}</td>
          <td>${lumpDisplay}</td>
          <td>${fmt(sipInvestedSoFar + lumpInvestedSoFar)}</td>
          <td><strong>${fmt(portfolioValue)}</strong></td>
        </tr>`;
    }
  }

  const totalInvested = sipInvestedSoFar + lumpInvestedSoFar;
  const gain = portfolioValue - totalInvested;

  // ─── Summary ─────────────────────────────────────────────────
  document.getElementById('r-sip-invested').textContent   = fmt(sipInvestedSoFar);
  document.getElementById('r-lump-invested').textContent  = fmt(totalLumpInvested);
  document.getElementById('r-total-invested').textContent = fmt(totalInvested);
  document.getElementById('r-gain').textContent           = fmt(gain);
  document.getElementById('r-maturity').textContent       = fmt(portfolioValue);

  // Progress bar
  document.getElementById('bar-sip').style.width  = ((sipInvestedSoFar / portfolioValue) * 100).toFixed(1) + '%';
  document.getElementById('bar-lump').style.width = ((totalLumpInvested / portfolioValue) * 100).toFixed(1) + '%';
  document.getElementById('bar-gain').style.width = ((gain / portfolioValue) * 100).toFixed(1) + '%';

  document.getElementById('year-table').innerHTML = tableHTML;

  const rs = document.getElementById('result-section');
  rs.style.display = 'block';
  rs.scrollIntoView({ behavior: 'smooth' });
}