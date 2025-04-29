function handleCSV() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a CSV file first.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        const rows = text.trim().split('\n').map(row => row.split(','));

        // Display in Table 1
        const table1Body = document.querySelector('#table1 tbody');
        table1Body.innerHTML = ''; // Clear previous
        rows.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell.trim();
                tr.appendChild(td);
            });
            table1Body.appendChild(tr);
        });

        // Process and show Table 2
        processValues(rows);
    };
    reader.readAsText(file);
}

function processValues(rows) {
    // Example assumption: first 6 rows contain numerical values in column 2
    const values = rows.slice(0, 6).map(r => parseFloat(r[1]));

    if (values.some(isNaN)) {
        alert('Invalid numeric values in CSV. Ensure values are numbers in column 2.');
        return;
    }

    const [a5, a7, a12, a13, a15, a20] = values;

    const alpha = a5 + a20;
    const beta = a15 / a7;
    const charlie = a13 * a12;

    document.getElementById('alphaValue').textContent = alpha.toFixed(2);
    document.getElementById('betaValue').textContent = beta.toFixed(2);
    document.getElementById('charlieValue').textContent = charlie.toFixed(2);
}
