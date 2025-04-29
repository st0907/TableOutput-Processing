document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("process.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => displayTable(data))
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("tableContainer").innerHTML = "<p>Failed to load table.</p>";
    });
});

function displayTable(data) {
    if (data.length === 0) {
        document.getElementById("tableContainer").innerHTML = "<p>No data to display.</p>";
        return;
    }

    let html = `<h2>Table</h2><table><thead><tr><th>Column</th><th>Value</th></tr></thead><tbody>`;

    data.forEach(row => {
        if (row.length === 2) {
            html += `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`;
        }
    });

    html += `</tbody></table>`;
    document.getElementById("tableContainer").innerHTML = html;
}
