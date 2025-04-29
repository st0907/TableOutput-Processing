// Function to calculate processed values for Table 2
function processTable() {
    const a5 = 10;
    const a7 = 2;
    const a12 = 5;
    const a13 = 6;
    const a15 = 30;
    const a20 = 15;

    // Calculate values for Table 2
    const alpha = a5 + a20;
    const beta = a15 / a7;
    const charlie = a13 * a12;

    // Display the processed values in Table 2
    document.getElementById('alphaValue').innerText = alpha;
    document.getElementById('betaValue').innerText = beta;
    document.getElementById('charlieValue').innerText = charlie;
}

// Call processTable function to display values on page load
window.onload = processTable;

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
