// Fetch the values from Table 1
const A5 = parseInt(document.getElementById("A5").textContent);
const A7 = parseInt(document.getElementById("A7").textContent);
const A13 = parseInt(document.getElementById("A13").textContent);
const A12 = parseInt(document.getElementById("A12").textContent);
const A15 = parseInt(document.getElementById("A15").textContent);
const A20 = parseInt(document.getElementById("A20").textContent);

// Perform calculations for Table 2
const alpha = A5 + A20;
const beta = A15 / A7;
const charlie = A13 * A12;

// Display the calculated values in Table 2
document.getElementById("alpha-value").textContent = alpha;
document.getElementById("beta-value").textContent = beta;
document.getElementById("charlie-value").textContent = charlie;
