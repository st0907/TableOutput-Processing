// Fetch the CSV from a URL
async function loadCSVData() {
    const url = 'https://drive.google.com/file/d/1_0lk9nzqiU1o1x879eUDJLiILz2Dylpd/view'; // Replace with the actual URL of your CSV file

    // Fetch the CSV file
    const response = await fetch(url);
    const csvText = await response.text();

    // Parse CSV into an array of rows
    const rows = csvText.split('\n').map(row => row.split(','));

    // Add rows to Table 1
    const table1 = document.querySelector('#table1 tbody');
    rows.forEach((row, index) => {
        if (index > 0 && row.length === 6) { // Skip the header row and ensure we have 6 columns
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell.trim();
                tr.appendChild(td);
            });
            table1.appendChild(tr);
        }
    });

    // Process Table 2 values after loading Table 1
    processTable(rows);
}

// Function to calculate processed values for Table 2
function processTable(rows) {
    // Assuming your data is in the second row (index 1), and columns are in the correct order
    const a5 = parseFloat(rows[1][0]); // A5
    const a7 = parseFloat(rows[1][1]); // A7
    const a12 = parseFloat(rows[1][2]); // A12
    const a13 = parseFloat(rows[1][3]); // A13
    const a15 = parseFloat(rows[1][4]); // A15
    const a20 = parseFloat(rows[1][5]); // A20

    // Calculate values for Table 2
    const alpha = a5 + a20;
    const beta = a15 / a7;
    const charlie = a13 * a12;

    // Display the processed values in Table 2
    document.getElementById('alphaValue').innerText = alpha.toFixed(2); // Show result with two decimal places
    document.getElementById('betaValue').innerText = beta.toFixed(2);
    document.getElementById('charlieValue').innerText = charlie.toFixed(2);
}

// Function to download the table as CSV
function downloadTable() {
    // Select the table by ID
    let table = document.querySelector('#table1');

    // Initialize an empty string for CSV content
    let csvContent = '';

    // Loop through each row in the table
    let rows = Array.from(table.rows);
    rows.forEach(row => {
        // Get all the cells of the row
        let cells = Array.from(row.cells);

        // Join each cell's text into a string separated by commas
        let cellText = cells.map(cell => cell.textContent).join(',');

        // Add the row to the CSV content
        csvContent += cellText + '\n';
    });

    // Create an invisible download link
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);

    // Make the link behave like a file download
    hiddenElement.target = '_blank';
    hiddenElement.download = 'table1.csv'; // Set the file name

    // Trigger the download by clicking the link
    hiddenElement.click();
}

// Load the CSV data on page load
window.onload = loadCSVData;
