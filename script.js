function processTableData() {
    // Get values from Table 1
    const A5 = parseInt(document.getElementById('A5').innerText);
    const A7 = parseInt(document.getElementById('A7').innerText);
    const A12 = parseInt(document.getElementById('A12').innerText);
    const A13 = parseInt(document.getElementById('A13').innerText);
    const A15 = parseInt(document.getElementById('A15').innerText);
    const A20 = parseInt(document.getElementById('A20').innerText);

    // Calculate values for Table 2
    const alphaValue = A5 + A20;        // A5 + A20
    const betaValue = A15 / A7;         // A15 / A7
    const charlieValue = A13 * A12;     // A13 * A12

    // Generate Table 2
    const table2 = `
        <table border="1">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Alpha</td><td>${alphaValue}</td></tr>
                <tr><td>Beta</td><td>${betaValue}</td></tr>
                <tr><td>Charlie</td><td>${charlieValue}</td></tr>
            </tbody>
        </table>
    `;
    
    // Display the table in the container
    document.getElementById('table2-container').innerHTML = table2;
}

// Call the function when the page loads
window.onload = processTableData;
