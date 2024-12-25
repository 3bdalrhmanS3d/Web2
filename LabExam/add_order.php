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

    // Retrieve form data
    $customer_name = $_POST['customer_name'];
    $food_item = $_POST['food_item'];
    $quantity = intval($_POST['quantity']);

    // Corrected SQL query
    $sql = "INSERT INTO orders (customer_name, food_item, quantity) VALUES ('$customer_name', '$food_item', $quantity)";

    // Execute query
    if ($con->query($sql) === TRUE) {
        echo "Order placed successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }

    $con->close();
?>
