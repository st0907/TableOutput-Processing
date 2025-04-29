<?php
if (isset($_FILES['csvFile']) && $_FILES['csvFile']['error'] == 0) {
    $file = $_FILES['csvFile']['tmp_name'];
    $rows = [];

    if (($handle = fopen($file, 'r')) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $rows[] = $data;
        }
        fclose($handle);
    }

    // Return JSON
    header('Content-Type: application/json');
    echo json_encode($rows);
} else {
    echo json_encode([]);
}
?>
