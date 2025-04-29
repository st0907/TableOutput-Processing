async function loadCSVData() {
    const url = 'https://drive.google.com/uc?export=download&id=1_0lk9nzqiU1o1x879eUDJLiILz2Dylpd'; // Correct link for CSV file
    const response = await fetch(url);
    const csvText = await response.text();
    const rows = csvText.split('\n').map(row => row.split(','));

    // Add rows to Table 1
    const table1 = document.querySelector('#table1 tbody');
    rows.forEach((row, index) => {
        if (index > 0 && row.length === 6) {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell.trim();
                tr.appendChild(td);
            });
            table1.appendChild(tr);
        }
    });

    // Process the table data
    processTable(rows);
}

function processTable(rows) {
    // Extract values from the row
    const a5 = parseFloat(rows[1][0]);
    const a7 = parseFloat(rows[1][1]);
    const a12 = parseFloat(rows[1][2]);
    const a13 = parseFloat(rows[1][3]);
    const a15 = parseFloat(rows[1][4]);
    const a20 = parseFloat(rows[1][5]);

    // Calculate the processed values
    const alpha = a5 + a20;
    const beta = a15 / a7;
    const charlie = a13 * a12;

    // Update the values in Table 2
    document.getElementById('alphaTable').innerText = alpha.toFixed(2);
    document.getElementById('betaTable').innerText = beta.toFixed(2);
    document.getElementById('charlieTable').innerText = charlie.toFixed(2);

    // Update the span elements
    document.getElementById('alphaSpan').innerText = `Alpha: ${alpha.toFixed(2)}`;
    document.getElementById('betaSpan').innerText = `Beta: ${beta.toFixed(2)}`;
    document.getElementById('charlieSpan').innerText = `Charlie: ${charlie.toFixed(2)}`;
}

function downloadTable() {
    let table = document.querySelector('#table1');
    let csvContent = '';

    let rows = Array.from(table.rows);
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

// Load CSV data when the page is loaded
window.onload = loadCSVData;
