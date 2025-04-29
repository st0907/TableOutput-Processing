alert("Script is loaded!");

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

// Debugging: Check values in the console
console.log("Alpha: " + alpha);
console.log("Beta: " + beta);
console.log("Charlie: " + charlie);

// Display the calculated values in Table 2
document.getElementById("alpha-value").textContent = alpha;
document.getElementById("beta-value").textContent = beta;
document.getElementById("charlie-value").textContent = charlie;

function downloadTable() {
    let table = document.querySelector('table');
    let rows = Array.from(table.rows);
    let csvContent = '';

    rows.forEach(row => {
        let cells = Array.from(row.cells);
        let cellText = cells.map(cell => cell.textContent).join(',');
        csvContent += cellText + '\n';
    });

    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'table1.csv';
    hiddenElement.click();
}
