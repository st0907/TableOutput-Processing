function readCSV() {
    const input = document.getElementById('csvFile');
    const file = input.files[0];

    if (!file) {
        alert('Please select a CSV file');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result.trim();
        const rows = text.split('\n').map(row => row.split(','));

        const tbody = document.querySelector('#csvTable tbody');
        tbody.innerHTML = ''; // Clear previous rows

        rows.forEach(row => {
            if (row.length >= 2) {
                const tr = document.createElement('tr');
                row.slice(0, 2).forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell.trim();
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            }
        });
    };

    reader.readAsText(file);
}
