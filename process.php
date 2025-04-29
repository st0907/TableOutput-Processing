<?php
// Example values from Table 1 (normally, you'd get these from a database or form submission)
$A5 = 10;
$A7 = 5;
$A13 = 12;
$A12 = 3;
$A15 = 30;
$A20 = 50;

// Perform calculations for Table 2
$alpha = $A5 + $A20;
$beta = $A15 / $A7;
$charlie = $A13 * $A12;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website for Assessment</title>
</head>
<body>
    <h1>Table 1: Data</h1>
    <table border="1">
        <tr>
            <th>Variable</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>A5</td>
            <td><?php echo $A5; ?></td>
        </tr>
        <tr>
            <td>A7</td>
            <td><?php echo $A7; ?></td>
        </tr>
        <tr>
            <td>A13</td>
            <td><?php echo $A13; ?></td>
        </tr>
        <tr>
            <td>A12</td>
            <td><?php echo $A12; ?></td>
        </tr>
        <tr>
            <td>A15</td>
            <td><?php echo $A15; ?></td>
        </tr>
        <tr>
            <td>A20</td>
            <td><?php echo $A20; ?></td>
        </tr>
    </table>

    <h2>Table 2: Calculated Values</h2>
    <table border="1">
        <tr>
            <th>Category</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Alpha</td>
            <td><?php echo $alpha; ?></td>
        </tr>
        <tr>
            <td>Beta</td>
            <td><?php echo $beta; ?></td>
        </tr>
        <tr>
            <td>Charlie</td>
            <td><?php echo $charlie; ?></td>
        </tr>
    </table>
</body>
</html>
