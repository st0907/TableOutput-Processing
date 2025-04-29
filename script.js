// Get the values for the calculations
const a5 = 2;
const a20 = 28;
const a15 = 80;
const a7 = 5;
const a13 = 90;
const a12 = 3;

// Calculate the values for Alpha, Beta, and Charlie
const alpha = a5 + a20;
const beta = a15 / a7;
const charlie = a13 * a12;

// Display the calculated values in the table
document.getElementById('alpha-value').innerText = alpha;
document.getElementById('beta-value').innerText = beta.toFixed(2); // Limit to 2 decimal places
document.getElementById('charlie-value').innerText = charlie;
