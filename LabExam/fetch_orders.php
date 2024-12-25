<?php
    $host = 'localhost';
    $username = 'root';
    $password = 'rootroot';
    $dbname = 'world';

    // Create connection
    $con = new mysqli($host, $username, $password, $dbname);

    // Check connection
    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }

    // Corrected SQL query
    $sql = "SELECT * FROM orders ORDER BY id DESC";
    $result = $con->query($sql);

    $orders = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $orders[] = $row;
        }
    }

    header('Content-Type: application/json');
    echo json_encode($orders);

    $con->close();
?>
