document.addEventListener("DOMContentLoaded", function () {
  const values = {
    A1: 41, A2: 18, A3: 21, A4: 63, A5: 2,
    A6: 53, A7: 5, A8: 57, A9: 60, A10: 93,
    A11: 28, A12: 3, A13: 90, A14: 39, A15: 80,
    A16: 88, A17: 49, A18: 60, A19: 26, A20: 28
  };

  const alpha = values.A5 + values.A20;
  let betaRaw = values.A15 / values.A7;
  const beta = Number.isInteger(betaRaw) ? betaRaw : betaRaw;
  const charlie = values.A13 * values.A12;

  document.getElementById("alpha-value").textContent = alpha;
  document.getElementById("beta-value").textContent = beta;
  document.getElementById("charlie-value").textContent = charlie;
});
