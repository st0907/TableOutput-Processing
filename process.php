<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $fileTmp = $_FILES['file']['tmp_name'];
    $fileName = basename($_FILES['file']['name']);
    $uploadDir = 'uploads/';

    // Create uploads folder if it doesn't exist
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $destination = $uploadDir . $fileName;

    if (move_uploaded_file($fileTmp, $destination)) {
        echo "File uploaded successfully: <a href='$destination'>$fileName</a>";
    } else {
        echo "File upload failed.";
    }
} else {
    echo "No file received.";
}
?>
