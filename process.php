<?php
// Process the data sent from the frontend (via AJAX or a form submission)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $A5 = $_POST['A5'];
    $A7 = $_POST['A7'];
    $A12 = $_POST['A12'];
    $A13 = $_POST['A13'];
    $A15 = $_POST['A15'];
    $A20 = $_POST['A20'];

    // Perform calculations
    $alphaValue = $A5 + $A20;
    $betaValue = $A15 / $A7;
    $charlieValue = $A13 * $A12;

    // Return the results as a JSON response
    echo json_encode([
        'alpha' => $alphaValue,
        'beta' => $betaValue,
        'charlie' => $charlieValue,
    ]);
}
?>
