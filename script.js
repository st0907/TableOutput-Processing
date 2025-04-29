function processTableData() {
    // Get values from Table 1
    const A5 = parseInt(document.getElementById('A5').innerText);
    const A7 = parseInt(document.getElementById('A7').innerText);
    const A12 = parseInt(document.getElementById('A12').innerText);
    const A13 = parseInt(document.getElementById('A13').innerText);
    const A15 = parseInt(document.getElementById('A15').innerText);
    const A20 = parseInt(document.getElementById('A20').innerText);

    // Prepare data to send to the PHP backend
    const formData = new FormData();
    formData.append('A5', A5);
    formData.append('A7', A7);
    formData.append('A12', A12);
    formData.append('A13', A13);
    formData.append('A15', A15);
    formData.append('A20', A20);

    // Send the data using AJAX
    fetch('process.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Generate Table 2 with the processed data
        const table2 = `
            <table border="1">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Alpha</td><td>${data.alpha}</td></tr>
                    <tr><td>Beta</td><td>${data.beta}</td></tr>
                    <tr><td>Charlie</td><td>${data.charlie}</td></tr>
                </tbody>
            </table>
        `;
        
        // Display the table in the container
        document.getElementById('table2-container').innerHTML = table2;
    });
}

// Call the function when the page loads
window.onload = processTableData;

